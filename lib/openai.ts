// import { OpenAI } from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, 
//   baseURL: "https://api.openai.com/v1", 
// });

// export async function openAIReply(messages: { role: "system" | "user" | "assistant"; content: string; name?: string }[]) {
//     try {
//         // Make a request to OpenAI's chat API
//         const response = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo", // You can use a different model if needed
//             messages: [
//                 ...messages,
//                 { role: "system", content: "You are a helpful assistant." },
//             ],
//         });

//         // Extract the message from the response
//         const reply = response.choices[0]?.message.content || "Sorry, no response generated.";

//         return reply;
//     } catch (error) {
//         console.error("Error with OpenAI API:", error);
//         return "Sorry, there was an error with the AI service.";
//     }
// }

export async function dummyOpenAIReply(messages: { role: string; content: string }[]) {
    const last = messages[messages.length - 1].content.toLowerCase();
    if (last.includes("html")) return "HTML stands for HyperText Markup Language.";
    if (last.includes("react")) return "React is a JavaScript library for building user interfaces.";
    if (last.includes("javascript")) return "JavaScript is a scripting language used to create interactive websites.";
    return "Sorry, I am a dummy AI. You can configure the real API later!";
  }
  