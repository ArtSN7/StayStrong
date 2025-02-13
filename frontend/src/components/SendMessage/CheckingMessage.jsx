import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { AppContext } from "../../context/AppContext"
import { useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function MessageCheck() {
  const [progress, setProgress] = useState(0)
  const { messageText, setMessageText, messageUsername, setMessageUsername } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          CheckData();
          navigate("/");
        }
        return prevProgress + 1
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])


  const CheckData = async () => {

    try{
      const response = await axios.post("http://localhost:5001/send/form", { message: messageText, author: messageUsername })

      if (response.status === 200) { // if it is valid
        navigate("/messageAccepted");
      }else if (response.status === 400) { // if it is not valid
        navigate("/messageRejected");
      }


    }catch(error){
      console.log(error)
    }

  }


  const progressVariants = {
    initial: { width: "0%" },
    animate: { width: `${progress}%` },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl text-center"
      >
        <svg className="w-24 h-24 mx-auto mb-6" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M35 25C22.2975 25 12 35.2975 12 48C12 55.4325 15.6125 62.0875 21.25 66.1625C17.9875 70.9 16 76.6025 16 82.75V87H31V82.75C31 74.0125 38.2625 66.75 47 66.75H52C64.7025 66.75 75 56.4525 75 43.75C75 31.0475 64.7025 20.75 52 20.75H47C44.0875 20.75 41.325 21.3125 38.775 22.325C37.6125 22.7375 36.4875 23.2375 35.4125 23.8125"
            stroke="url(#logo-gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.path
            d="M65 75C77.7025 75 88 64.7025 88 52C88 44.5675 84.3875 37.9125 78.75 33.8375C82.0125 29.1 84 23.3975 84 17.25V13H69V17.25C69 25.9875 61.7375 33.25 53 33.25H48C35.2975 33.25 25 43.5475 25 56.25C25 68.9525 35.2975 79.25 48 79.25H53C55.9125 79.25 58.675 78.6875 61.225 77.675C62.3875 77.2625 63.5125 76.7625 64.5875 76.1875"
            stroke="url(#logo-gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          />
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>

        <h1 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Checking Your Message
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Please wait while we ensure your message aligns with our community guidelines.
        </p>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
          <motion.div
            className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
            variants={progressVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
          />
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">This usually takes less than a minute.</p>
      </motion.div>
    </div>
  )
}
