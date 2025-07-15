'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const botResponses: { [key: string]: string } = {
  'who are you': "Hi! I'm Umar Farooq, a passionate Full Stack Developer specializing in the MERN stack. I'm currently pursuing my B.E. in Computer Science Engineering! 👨‍💻",
  'where did you study': "I'm currently studying at Dhaanish Ahmed College of Engineering in Chennai, pursuing my B.E. in Computer Science Engineering (2022-2026). 🎓",
  'what is your latest project': "My latest project is a Study Coach Bot - an AI-powered study assistant with personalized learning recommendations and progress tracking! 🤖📚",
  'what are your skills': "I specialize in the MERN stack: MongoDB, Express.js, React, and Node.js. I also work with Tailwind CSS, WebSocket, Email.js, and Figma for design! 💻",
  'contact': "You can reach me at umarfarooq.dev@gmail.com or through the contact form on this website. I'm always open to new opportunities! 📧",
  'hello': "Hello there! 👋 I'm Umar Bot, here to help you learn more about Umar Farooq. Feel free to ask me anything!",
  'hi': "Hi! 👋 Great to meet you! I'm here to answer any questions about Umar's background, projects, or skills.",
  'default': "That's an interesting question! 🤔 You can ask me about Umar's education, projects, skills, or how to contact him. Try asking 'What are your skills?' or 'Where did you study?'"
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Umar Bot 🤖 Ask me anything about Umar Farooq!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return botResponses.default;
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Umar Bot</h3>
                  <p className="text-xs opacity-90">Ask me anything!</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${message.isBot ? 'bg-primary-500' : 'bg-gray-600'}`}>
                      {message.isBot ? <Bot className="w-3 h-3 text-white" /> : <User className="w-3 h-3 text-white" />}
                    </div>
                    <div className={`px-3 py-2 rounded-lg text-sm ${message.isBot ? 'bg-gray-800 text-gray-200' : 'bg-primary-500 text-white'}`}>
                      {message.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary-500"
                />
                <motion.button
                  onClick={sendMessage}
                  className="px-3 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}