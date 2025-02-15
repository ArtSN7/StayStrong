"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Send, ArrowLeft } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

// Simple AI response generator (replace with actual AI implementation)
const generateResponse = async (messages) => {
  // Simulating API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await axios.post("http://localhost:5001/chat/", { messages })
                
  return response.data;
}

export default function ChatDisplay() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm Dr. StayStrong. Tell me your story." },
  ])

  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [allowSend, setAllowSend] = useState(true)

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]) // Added messages to the dependency array



  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!allowSend) return

    if (!input.trim()) return


    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setAllowSend(false)
    setInput("")
    setIsTyping(true)

    const aiResponse = await generateResponse([...messages, userMessage])
    setIsTyping(false)
    setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }])
    setAllowSend(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900 flex flex-col p-4">
      <Link to="/" className="mb-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-semibold rounded-md shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-colors duration-300 flex items-center"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </motion.button>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow max-w-2xl w-full mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col"
      >
        <h1 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Chat
        </h1>

        <div className="flex-grow overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-purple-100 dark:bg-purple-900 ml-auto"
                  : "bg-gray-100 dark:bg-gray-700 mr-auto"
              } max-w-[80%]`}
            >
              <p
                className={`text-sm ${
                  message.role === "user" ? "text-purple-800 dark:text-purple-200" : "text-gray-800 dark:text-gray-200"
                }`}
              >
                {message.content}
              </p>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mr-auto"
            >
              <p className="text-sm text-gray-800 dark:text-gray-200">Dr. AI is typing...</p>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="flex-grow px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <motion.button
            disabled={!allowSend}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md shadow-md hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-colors duration-300"
          >
            <Send size={20} />
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

