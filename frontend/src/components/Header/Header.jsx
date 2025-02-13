// Handles the navigation bar and logo display.

import { Sun, Moon, MessageSquare, Plus } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeContext } from "../../context/ThemeContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

function Header() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  const ChangeTheme = () => {

    toggleTheme();

  }

  const NavigateToMessagesDisplay = () => {

    const navigate = useNavigate();
    navigate("/messagesDisplay")
  
  }


    return (
      <header className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-lg fixed w-full z-10">
        <nav className="container max-w-full px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="./src/assets/logo.svg" alt="logo" className="w-10 h-10" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Stay Strong
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={NavigateToMessagesDisplay}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <MessageSquare size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={ChangeTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
            >
              {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
        </nav>
      </header>
    );
  }

  export default Header;