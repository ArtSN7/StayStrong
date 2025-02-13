import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { ThemeProvider } from './context/ThemeContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import StartingPage from './components/StartingPage/StartingPage.jsx'
import MessageForm from './components/SendMessage/MessageForm.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/messageForm" element={<MessageForm />} />
          <Route path="/messagesDisplay" element={<MessageForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
  </ThemeProvider>,
)
