import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";


export const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "You are a helpful assistant that answers questions concisely"
  ),
  HumanMessagePromptTemplate.fromTemplate("{text}"),
]);

export const evaluatePrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "You are a helpful assistant that evaluates other chatbot responses to a given prompt in a structured format"
  ),
  HumanMessagePromptTemplate.fromTemplate(`You will be given a prompt, possibly some criteria, and two responses, and return which one you think is better in a structured format:
PROMPT: {prompt}
CRITERIA: {criteria}
RESPONSE_1: {response_1}
RESPONSE_2: {response_2}

Respond in the following JSON format with no additional notes or context:
"""
  reason: string; // 'reason why response A was better than B'
  winner: number;  // '1' or '2',
"""
`),
]);
