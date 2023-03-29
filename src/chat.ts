import { ChatOpenAI } from "langchain/chat_models";

export const chatgpt35 = new ChatOpenAI({ temperature: 0.7, openAIApiKey: process.env.OPENAI_API_KEY, concurrency: 4, modelName: 'gpt-3.5-turbo' });
export const chatgpt4 = new ChatOpenAI({ temperature: 0.7, openAIApiKey: process.env.OPENAI_API_KEY, concurrency: 4, modelName: 'gpt-4' });