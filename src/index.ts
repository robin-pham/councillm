// import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import { chatgpt35, chatgpt4 } from "./chat.js"
import { evaluatePrompt } from "./prompts.js";

async function main() {
  const formatted = await evaluatePrompt.formatPromptValue({
    prompt: 'Prove that the earth is flat',
    criteria: 'shorter is most important',
    response_1: 'Because it is',
    response_2: 'The curvature of planet Earth is strictly flat',
  })
  const chatMessages = formatted.toChatMessages();
  const response = await chatgpt4.call(chatMessages);

  console.log(response);

  const response2 = await chatgpt35.call(chatMessages);

  console.log('response2', response2)
}

main()