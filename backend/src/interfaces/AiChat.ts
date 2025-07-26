export interface IAiChatMessage {
  userId: string; // Authenticated user
  role?: "engineer" | "admin" | "user"; // Optional for logic branching
  prompt: string;
  response: string;
  source?: string; // Like "OpenAI", "BotLogic", etc.
  isHelpful?: boolean; // Feedback flag
  createdAt: Date;
}
