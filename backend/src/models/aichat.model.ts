import { Schema, model } from "mongoose";
import { IAiChatMessage } from "../interfaces/AiChat";

const aiChatSchema = new Schema<IAiChatMessage>(
  {
    userId: { type: String, required: true },
    role: { type: String, enum: ["engineer", "admin", "user"], default: "user" },
    prompt: { type: String, required: true },
    response: { type: String, required: true },
    source: { type: String, default: "BotLogic" },
    isHelpful: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

const AiChatModel = model<IAiChatMessage>("AiChat", aiChatSchema);

export default AiChatModel;