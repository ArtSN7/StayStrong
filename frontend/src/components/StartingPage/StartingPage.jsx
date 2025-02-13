"use client"

import { useState } from "react"
import StartingMainContent from "./MainComponent"
import FloatingButton from "./FloatinButton"
import Header from "../Header/Header"
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";


export default function StartingPage() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${theme === 'light' ? "" : "dark"}`}>
      <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900 min-h-screen transition-colors duration-300">
        <Header />
        <StartingMainContent />
        <FloatingButton />
      </div>
    </div>
  );
}
