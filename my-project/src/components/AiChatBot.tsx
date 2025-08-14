import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

interface Message {
  sender: "user" | "bot";
  text: string;
}

// Store API key securely (hardcoded here for simplicity, use .env in production)
const API_KEY = "AIzaSyBVd0ujZbrVJ9Y1FMbMfd9h8vWSnrOb764";
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

// Predefined responses for specific questions
const predefinedResponses: { [key: string]: string } = {
  "what is your name": "I am Nadib Rana",
  "who are you": "I am Rana",
  "what is your profession": "I am a Software Engineer",
  "what do you do": "I am a Software Engineer",
  "how are you": "I'm doing great, thanks for asking!",
  "where are you from": "I'm from Dhaka, Bangladesh",
  "what is your favorite language": "I love working with TypeScript and JavaScript",
  "what is your tech stack": "I specialize in the MERN stack",
  "do you code": "Yes, coding is my passion",
  "what is MERN": "MERN stands for MongoDB, Express, React, and Node.js",
  "what is your favorite framework": "React.js is my go-to",
  "do you use Tailwind": "Yes, Tailwind CSS is my favorite for styling",
  "what is your favorite database": "MongoDB is my preferred NoSQL database",
  "do you work with APIs": "Absolutely, I build and consume RESTful APIs",
  "what is your role": "I’m a Full-stack Developer at 9AM SOLUTION",
  "do you work remotely": "Yes, I often work remotely",
  "do you like your job": "I love what I do!",
  "what is your goal": "To build scalable, emotionally resonant platforms",
  "do you freelance": "I occasionally take freelance projects",
  "do you build eCommerce sites": "Yes, I’ve built several WooCommerce and custom shops",
  "do you use WordPress": "Yes, I’ve delivered 15+ WordPress sites",
  "do you write documentation": "Yes, I write professional documentation and reports",
  "do you use LaTeX": "Yes, I use LaTeX for academic and technical writing",
  "do you speak Bangla": "Yes, I can explain technical concepts in Bangla",
  "do you manage teams": "I collaborate and lead agile development teams",
  "do you use Git": "Yes, Git is essential to my workflow",
  "do you use GitHub": "Yes, I host and manage projects on GitHub",
  "do you use VS Code": "Yes, it’s my favorite code editor",
  "do you use Figma": "Yes, I use Figma for UI/UX prototyping",
  "do you animate interfaces": "Yes, I love adding interactivity and motion",
  "do you write blogs": "Yes, I’m working on adding blogs to my portfolio",
  "do you use testimonials": "Yes, I integrate testimonials for credibility",
  "do you optimize performance": "Yes, performance is a top priority",
  "do you handle SEO": "Yes, I optimize sites for search engines",
  "do you use TypeScript": "Yes, I prefer TypeScript for frontend prototyping",
  "do you use Mongoose": "Yes, I design schemas and validations with Mongoose",
  "do you build CRUD apps": "Yes, modular CRUD controllers are my specialty",
  "do you use Express": "Yes, I use Express for backend APIs",
  "do you use Node.js": "Yes, Node.js powers my server-side logic",
  "do you use React": "Yes, React is my frontend framework of choice",
  "do you use Redux": "Yes, I use Redux for state management when needed",
  "do you use Next.js": "Yes, I occasionally use Next.js for SSR and routing",
  "do you use animations": "Yes, I use Framer Motion and CSS animations",
  "do you build portfolios": "Yes, I craft narrative-driven portfolios",
  "do you use Firebase": "Yes, I’ve used Firebase for auth and hosting",
  "do you use Docker": "Yes, I containerize apps with Docker",
  "do you use Postman": "Yes, I test APIs with Postman",
  "do you use Swagger": "Yes, I document APIs with Swagger",
  "do you use Jira": "Yes, I manage tasks and sprints with Jira",
  "do you use Trello": "Yes, Trello helps me stay organized",
  "do you use Notion": "Yes, Notion is great for documentation and planning",
  "do you use ChatGPT": "Yes, I use AI tools to brainstorm and debug",
  "do you like design": "Yes, I’m passionate about UI/UX design",
  "do you build landing pages": "Yes, I design and develop engaging landing pages",
  "do you use WooCommerce": "Yes, I use WooCommerce for online shops",
  "do you use Stripe": "Yes, I integrate Stripe for payments",
  "do you use REST": "Yes, I build RESTful APIs",
  "do you use JSON": "Yes, JSON is my go-to data format",
  "do you use JWT": "Yes, I use JWT for authentication",
};

const AiChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) {
      alert("Please enter a message!");
      return;
    }

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Check for predefined responses (case-insensitive)
    const normalizedInput = input.toLowerCase().trim();
    const predefinedReply = predefinedResponses[normalizedInput];

    if (predefinedReply) {
      // Use predefined response if available
      setMessages((prev) => [...prev, { sender: "bot", text: predefinedReply }]);
      setLoading(false);
      return;
    }

    // Fallback to Gemini API for other queries
    if (!API_KEY) {
      alert("API key is missing!");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        `${API_URL}?key=${API_KEY}`,
        {
          contents: [{
            parts: [{
              text: `You are Rana, a Software Engineer. Respond to the following query: ${input}`
            }]
          }],
          generationConfig: {
            maxOutputTokens: 200,
            temperature: 0.7,
          }
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const botReply = res.data.candidates[0].content.parts[0].text || "No response";
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error: Could not get response" },
      ]);
    } finally {
      setLoading(false);
    }
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
          Send
        </button>
      </div>
    </div>
  );
};

export default AiChatBot;