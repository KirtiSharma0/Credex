import React, { useEffect, useRef, useState } from "react";
import { IoCodeSlash, IoSend } from "react-icons/io5";
import { BiPlanet } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.png";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [isResponseScreen, setisResponseScreen] = useState(false);
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const hitRequest = async (customMsg = null) => {
    const msg = customMsg || message;
    if (!msg.trim()) {
      alert("You must write something...!");
      return;
    }

    const userMessage = { type: "userMsg", text: msg };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setisResponseScreen(true);

    try {
      const key = import.meta.env.VITE_API_KEY;
      const genAI = new GoogleGenerativeAI(key);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `
You are a helpful assistant, customer chat widget for a marketing website for a software resale startup.
Assume our website has all the features needed for this. Just tell the user to follow some steps to sell the software, the steps is upto you okay. 
Always keep your answers short, clear, very friendly and focused on software-related solutions. 
Only answer what is asked without unnecessary elaboration.

User: ${msg}
`;

      const result = await model.generateContent(prompt);

      const botReply = { type: "responseMsg", text: result.response.text() };

      setTimeout(() => {
        setMessages((prev) => [...prev, botReply]);
      }, 100);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { type: "responseMsg", text: "Error fetching response." },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      hitRequest();
    }
  };

  const demoQueries = [
    { text: "What is this website for" },
    { text: "Can I sell my software here?" },
    { text: "How does this chatbot help me?" },
    { text: "What are the steps to sell my software?" },
  ];

  const newChat = () => {
    setisResponseScreen(false);
    setMessages([]);
  };

  const userAvatar = "/user.jpg";
  const botAvatar = logo;

  return (
    <div className={`w-full min-h-screen ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'} text-neutral-900 dark:text-white px-4 py-6 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto">
        {isResponseScreen ? (
          <>
            <div className="flex flex-col gap-6 h-[80vh] max-h-[80vh]">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Feel free to ask anything</h2>
                <button
                  onClick={newChat}
                  className={`${isDarkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-neutral-100 hover:bg-neutral-200'} px-5 py-2 rounded-full text-sm transition-all`}
                >
                  New Chat
                </button>
              </div>

              <div className="messages px-4 sm:px-[20px] py-2 sm:py-[10px] space-y-4 overflow-y-auto max-h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {messages.map((msg, index) => {
                  const isLast = index === messages.length - 1;
                  const isBot = msg.type === "responseMsg";
                  const avatar = isBot ? botAvatar : userAvatar;

                  return (
                    <div
                      key={index}
                      className={`flex items-start gap-3 mb-4 ${
                        isBot ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <img
                        src={avatar}
                        alt="avatar"
                        className="w-10 h-10 rounded-full object-cover"
                      />

                      <div
                        className={`rounded-xl px-3 py-2 max-w-[90%] sm:max-w-[75%] md:max-w-[65%]
 text-sm sm:text-base ${
                          isBot
                            ? `${isDarkMode ? 'bg-neutral-800 text-orange-300' : 'bg-neutral-100 text-black'}`
                            : `${isDarkMode ? 'bg-neutral-700 text-white' : 'bg-neutral-200 text-neutral-900'}`
                        } transition-colors duration-300`}
                      >
                        {isLast && isBot ? (
                          <TextGenerateEffect
                            className={`${isDarkMode ? 'text-orange-300' : 'text-orange-600'} text-base leading-relaxed`}
                            words={msg.text}
                          />
                        ) : (
                          msg.text
                        )}
                      </div>
                    </div>
                  );
                })}
                <div ref={bottomRef} />
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4">
            <h1 className={`text-3xl sm:text-5xl font-bold mb-6 sm:mb-10 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>Welcome to SoftSell</h1>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
              {demoQueries.map((q, i) => (
                <div
                  key={i}
                  onClick={() => hitRequest(q.text)}
                  className={`relative ${isDarkMode ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-neutral-100 hover:bg-neutral-200'} p-4 sm:p-6 rounded-xl cursor-pointer transition-all min-h-[120px] sm:min-h-[150px] flex flex-col justify-between`}
                >
                  <p className={`text-base mb-3 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>{q.text}</p>
                  <div className="absolute bottom-3 right-3 text-xl text-orange-500">
                    {i === 0 ? (
                      <IoCodeSlash />
                    ) : i === 1 ? (
                      <BiPlanet />
                    ) : i === 2 ? (
                      <FaPython />
                    ) : (
                      <TbMessageChatbot />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

<div className="w-full mt-6 px-4">
<div className={`${isDarkMode ? 'bg-neutral-800' : 'bg-gray-200'} flex items-center rounded-full px-3 py-2 w-full sm:max-w-3xl mx-auto transition-colors duration-300`}>
            <input
              ref={inputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Write your message here..."
              className={`bg-transparent flex-1 outline-none text-sm p-2 ${isDarkMode ? 'text-white placeholder-neutral-500' : 'text-neutral-900 placeholder-neutral-500'}`}
            />
            {message && (
              <button
                onClick={() => hitRequest()}
                className="text-orange-500 text-xl ml-2 hover:text-orange-600 transition-colors"
              >
                <IoSend />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
