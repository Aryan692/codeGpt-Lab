// lib/openrouter.ts
import axios from "axios";

export const callOpenRouterAPI = async (messages: { role: string; content: string }[]) => {
  const res = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "mistralai/mistral-7b-instruct", // you can choose any model
      messages,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data.choices[0].message.content;
};
