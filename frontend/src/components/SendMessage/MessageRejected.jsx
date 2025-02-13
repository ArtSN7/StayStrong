import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { XCircle, Home } from "lucide-react"

export default function MessageRejected() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl text-center"
      >
        <XCircle className="w-16 h-16 mx-auto mb-6 text-red-500" />

        <h1 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Message Not Approved
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We're sorry, but your message did not meet our community guidelines. Please review our guidelines and try
          again with a different message.
        </p>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md shadow-md hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-colors duration-300"
          >
            <Home className="mr-2" size={20} />
            Return to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}

