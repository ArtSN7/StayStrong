// css
import './index.css'

// context
import { ThemeProvider } from './context/ThemeContext'
import { AppProvider } from './context/AppContext'

// router
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components
import StartingPage from './components/StartingPage/StartingPage.jsx'
import MessageForm from './components/SendMessage/MessageForm.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import CheckingMessage from './components/SendMessage/CheckingMessage.jsx'
import MessageAccepted from './components/SendMessage/MessageAccepted.jsx'
import MessageRejected from './components/SendMessage/MessageRejected.jsx'
import RandomSpeechDisplay from './components/SpDisplay/RandomSpeechDisplay.jsx'
import ChatDisplay from './components/ChatDisplay/ChatDisplay.jsx'

// main
createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StartingPage />} /> {/* starting page */}
          <Route path="/messageForm" element={<MessageForm />} /> {/* message form to send */}
          <Route path="/chatDisplay" element={<ChatDisplay />} /> {/* messages to display */}
          <Route path="/checkingMessage" element={<CheckingMessage />} /> {/* checking message */}
          <Route path="/messageAccepted" element={<MessageAccepted />} /> {/* message accepted */}
          <Route path="/messageRejected" element={<MessageRejected />} /> {/* message rejected */}
          <Route path="/randomSpeechDisplay" element={<RandomSpeechDisplay />} /> {/* random speech display */}
          <Route path="*" element={<ErrorPage />} /> {/* error page */}
        </Routes>
      </Router>
    </AppProvider>
  </ThemeProvider>,
)
