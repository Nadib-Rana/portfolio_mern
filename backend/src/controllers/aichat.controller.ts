import { Request, Response } from "express";
import AiChatModel from "../models/aichat.model";

export const chatWithBot = async (req: Request, res: Response) => {
  try {
    const { userId, role, prompt } = req.body;

    // 🧠 Replace this mock with external API later!
    const aiReply =
      prompt.toLowerCase().includes("deployment")
        ? "You can deploy to Vercel or Heroku using Git-based workflows."
        : "I’ll get back to you with more detailed info soon.";

    const chatLog = new AiChatModel({
      userId,
      role,
      prompt,
      response: aiReply,
      source: "MockBot",
    });

    const saved = await chatLog.save();
    res.status(200).json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};