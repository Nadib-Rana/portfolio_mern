import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const API_URL =
  "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-v0.1";

const AiChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(
        API_URL,
        { inputs: input },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_HF_API_KEY}`,
          },
        }
      );

      const botReply =
        res.data[0]?.generated_text?.replace(input, "").trim() ||
        "No response";
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error: Could not get response" },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 text-white">
      <h2 className="text-2xl font-bold text-center mb-4">🤖 AI Chat Bot</h2>

      {/* Chat area */}
      <div className="bg-black border border-gray-700 rounded-lg p-4 h-96 overflow-y-auto flex flex-col gap-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-600 text-white self-end"
                : "bg-gray-800 text-gray-200 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg self-start">
            Bot is typing...
          </div>
        )}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input box */}
      <div className="flex mt-3 gap-2">
        <input
          className="flex-1 border border-gray-600 bg-gray-900 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          onClick={sendMessage}
        >
          Send Me
        </button>
      </div>
    </div>
  );
};

export default AiChatBot;
