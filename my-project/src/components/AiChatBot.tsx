import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaComments } from "react-icons/fa";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const API_KEY = "AIzaSyBVd0ujZbrVJ9Y1FMbMfd9h8vWSnrOb764";
const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

const predefinedResponses: { [key: string]: string } = {};

// 👤 Identity & Background
const responses: { [key: string]: string } = {
  "what is your name": "I am Nadib Rana",
  "who are you": "I am Nadib, thanks for asking. ",
  "what is your full name": "My full name is Nadib Rana",
  "where are you from": "I'm from Dhaka, Bangladesh",
  "how old are you": "I'm in my early 26",
  "what is your education": "I completed my degree in Computer Science and Engineering from Green University of bangladesh.",
  "what is your profession": "I am a Software Engineer",
  "what do you do": "I build scalable web platforms and craft digital experiences",
  "what is your role": "I’m a Full-stack Developer at 9AM SOLUTION",
  "do you work remotely": "Yes, I often work remotely",
  "do you freelance": "I occasionally take freelance projects",
  "do you like your job": "I love what I do!",
  "what is your goal": "To build scalable, emotionally resonant platforms",
  "what inspires you": "Creative challenges and solving real-world problems",
  "what is your dream": "To lead impactful tech products that blend logic and emotion",
};

// Add duplicates with and without question mark
for (const key in responses) {
  predefinedResponses[key] = responses[key];
  predefinedResponses[key + "?"] = responses[key];
}

// 💻 Tech Stack & Tools
const techResponses: { [key: string]: string } = {
  "what is your tech stack": "I specialize in the MERN stack",
  "what is MERN": "MERN stands for MongoDB, Express, React, and Node.js",
  "do you code": "Yes, coding is my passion",
  "do you use React": "Yes, React is my frontend framework of choice",
  "do you use Tailwind": "Yes, Tailwind CSS is my favorite for styling",
  "do you use TypeScript": "Yes, I prefer TypeScript for frontend prototyping",
  "do you use Node.js": "Yes, Node.js powers my server-side logic",
  "do you use Express": "Yes, I use Express for backend APIs",
  "do you use MongoDB": "Yes, MongoDB is my preferred NoSQL database",
  "do you use Mongoose": "Yes, I design schemas and validations with Mongoose",
};

for (const key in techResponses) {
  predefinedResponses[key] = techResponses[key];
  predefinedResponses[key + "?"] = techResponses[key];
}

// 🌐 Web & eCommerce
const webResponses: { [key: string]: string } = {
  "do you build eCommerce sites": "Yes, I’ve built several WooCommerce and custom shops",
  "do you use WordPress": "Yes, I’ve delivered 15+ WordPress sites",
  "do you use WooCommerce": "Yes, I use WooCommerce for online shops",
  "do you use Stripe": "Yes, I integrate Stripe for payments",
  "do you build landing pages": "Yes, I design and develop engaging landing pages",
  "do you build service platforms": "Yes, I build scalable platforms for real-world services",
  "do you handle SEO": "Yes, I optimize sites for search engines",
  "do you optimize performance": "Yes, performance is a top priority",
};

for (const key in webResponses) {
  predefinedResponses[key] = webResponses[key];
  predefinedResponses[key + "?"] = webResponses[key];
}

// 🧠 Mindset & Philosophy
const mindsetResponses: { [key: string]: string } = {
  "do you love coding": "Absolutely, it’s both my craft and my passion",
  "do you enjoy design": "Yes, I believe design is storytelling through visuals",
  "do you like challenges": "Yes, challenges fuel my growth and creativity",
  "do you work in teams": "Yes, I thrive in collaborative, agile environments",
  "do you learn continuously": "Always—tech evolves, and so do I",
  "do you speak Bangla": "Yes, I can explain technical concepts in Bangla",
};

for (const key in mindsetResponses) {
  predefinedResponses[key] = mindsetResponses[key];
  predefinedResponses[key + "?"] = mindsetResponses[key];
}

// 🧰 Productivity & Tools
const toolsResponses: { [key: string]: string } = {
  "do you use Jira": "Yes, I manage tasks and sprints with Jira",
  "do you use Trello": "Yes, Trello helps me stay organized",
  "do you use Notion": "Yes, Notion is great for documentation and planning",
  "do you use ChatGPT": "Yes, I use AI tools to brainstorm and debug",
};

for (const key in toolsResponses) {
  predefinedResponses[key] = toolsResponses[key];
  predefinedResponses[key + "?"] = toolsResponses[key];
}

// 🎨 Creative & Personal
const personalResponses: { [key: string]: string } = {
  "do you animate interfaces": "Yes, I love adding interactivity and motion",
  "do you write blogs": "Yes, I’m working on adding blogs to my portfolio",
  "do you use testimonials": "Yes, I integrate testimonials for credibility",
  "do you like design": "Yes, I’m passionate about UI/UX design",
  "do you play games": "Yes, I occasionally play strategy games and puzzles",
  "do you like music": "Yes, music helps me focus while coding",
  "do you play chess": "Yes, chess sharpens my problem-solving skills",
};

for (const key in personalResponses) {
  predefinedResponses[key] = personalResponses[key];
  predefinedResponses[key + "?"] = personalResponses[key];
}

// ✅ Now predefinedResponses has all categories with question mark and without question mark


const AiChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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

    const normalizedInput = input.toLowerCase().trim();
    const predefinedReply = predefinedResponses[normalizedInput];

    if (predefinedReply) {
      setMessages((prev) => [...prev, { sender: "bot", text: predefinedReply }]);
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        `${API_URL}?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `You are Rana, a Software Engineer. Respond to the following query: ${input}`,
                },
              ],
            },
          ],
          generationConfig: {
            maxOutputTokens: 200,
            temperature: 0.7,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const botReply = res.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
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
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaComments size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-[500px] bg-black text-white rounded-lg shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 p-3 flex justify-between items-center">
            <span className="font-semibold">Ask about me.(AI)</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-sm hover:underline"
            >
              Close
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 ml-[-10px] overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[98%] px-4 py-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white self-end text-right"
                    : "bg-gray-800 text-gray-200 self-start text-left"
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

          {/* Input */}
          <div className="p-3 border-t border-gray-700 flex gap-2">
            <input
              className="flex-1 bg-gray-900 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiChatBot;