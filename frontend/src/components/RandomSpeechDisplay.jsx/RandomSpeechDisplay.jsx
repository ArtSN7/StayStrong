import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { RefreshCw, Quote } from "lucide-react"
import Link from "next/link"

// Simulated API call (replace this with your actual API call)
const fetchRandomSpeech = async () => {
  // Simulating an API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return {
    content:
      "Believe you can and you're halfway there. Your attitude, not your aptitude, will determine your altitude. Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Theodore Roosevelt",
  }
}

export default function RandomSpeech() {
  const [speech, setSpeech] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const loadNewSpeech = async () => {
    setIsLoading(true)
    const newSpeech = await fetchRandomSpeech()
    setSpeech(newSpeech)
    setIsLoading(false)
  }

  useEffect(() => {
    loadNewSpeech()
  }, []) //Fixed useEffect dependency

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Random Motivational Speech
        </h1>

        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <RefreshCw size={48} className="text-purple-600 dark:text-purple-400" />
            </motion.div>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-4">
              <Quote size={24} className="inline-block mr-2 text-purple-600 dark:text-purple-400" />
              {speech.content}
            </blockquote>
            <p className="text-right text-gray-600 dark:text-gray-400">- {speech.author}</p>
          </motion.div>
        )}

        <div className="mt-8 flex justify-between items-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-md shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-colors duration-300"
            >
              Back to Home
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={loadNewSpeech}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md shadow-md hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-colors duration-300"
          >
            New Speech
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

