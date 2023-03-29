export interface Candidate {
  name: string;
  initialResponse: Response;
  // do we want them to modify their responses in future rounds?
  // responses: string[];
  evaluations: Evaluation[];
}

interface Evaluation {
  candidateName: string;
  response: Response;
  evaluation: number;
}

type ReplyCandidate = Candidate & {
  response: Response
}

export async function determineTournamentWinner(candidates: ReplyCandidate[], evaluators: Candidate[]): Promise<ReplyCandidate> {
  if (candidates.length === 0) {
    throw new Error('Cant be 0 candidates')
  }
  if (candidates.length === 1) {
    return candidates[0];
  }

  const matches: Promise<ReplyCandidate>[] = [];

  for (let i = 0; i < candidates.length; i += 2) {
    const candidateA = candidates[i];
    const candidateB = candidates[i + 1];
    matches.push(determineMatchWinner(candidateA, candidateB, evaluators))
  }

  const remainingCandidates = await Promise.all(matches);

  return determineTournamentWinner(remainingCandidates, evaluators)
}

async function determineMatchWinner(candidateA: ReplyCandidate, candidateB: ReplyCandidate, evaluators: Candidate[]): Promise<ReplyCandidate> {
  console.log(candidateA, candidateB, evaluators)
  return candidateA;
}
