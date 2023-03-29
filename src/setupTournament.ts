// determine prompt and context and evaluation criteria
// setup candidates
// each candidate does an initial reply
// after initial reply each candidate is then sent to determine the tournament winner
// each round consists of:
// - A vs B, evaluated by all the candidates, majority wins
// - Winner moves on

import { Candidate } from "./determineTournamentWinner.js";

export interface Tournament {
  evaluationCriteria: string;
  prompt: string;
  candidates: Candidate;
}

// export async function setupTournament({
//   evaluationCriteria,
//   prompt,
//   candidates
// }: Tournament) {
//   // get all initial responses
//   // feed into determine tournament winner
//   // return with winner
// }