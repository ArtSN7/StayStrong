// Contains the main section with the title and description.

import { Sun, Moon, MessageSquare, Plus } from "lucide-react"
import { motion } from "framer-motion"

function StartingMainContent() {
    return (
      <main className="container mx-auto px-6 pt-24 pb-16">
        <section className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400"
          >
            Empower Your Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl mb-12 text-gray-700 dark:text-gray-300"
          >
            Join a community of resilience, share inspiration, and find strength in every word.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-purple-600 dark:text-purple-400">Why Stay Strong?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[{ title: "Connect", description: "Build a supportive network" }, { title: "Inspire", description: "Share your wisdom and experiences" }, { title: "Grow", description: "Learn from others' journeys" }, { title: "Persevere", description: "Find strength in challenging times" }].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    );
  }

export default StartingMainContent;