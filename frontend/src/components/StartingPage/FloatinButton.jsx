// Represents the floating action button.

import { Sun, Moon, MessageSquare, Plus } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

function FloatingButton() {
    const navigate = useNavigate();

    const NavigateToMessageForm = () => {
      navigate("/messageForm")
    }

    return (
      <motion.button
        onClick={NavigateToMessageForm}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg"
      >
        <Plus size={24} />
      </motion.button>
    );
  }

export default FloatingButton;