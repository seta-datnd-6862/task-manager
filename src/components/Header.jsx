import React from 'react';
import { Moon, Sun } from 'lucide-react';

const Header = ({ darkMode, onToggleDarkMode }) => {
  return (
    <header className="text-center mb-8 relative">
      <button
        onClick={onToggleDarkMode}
        className={`absolute right-0 top-0 p-3 rounded-full transition-colors ${
          darkMode 
            ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
            : 'bg-white text-gray-700 hover:bg-gray-100'
        } shadow-lg`}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      
      <h1 className={`text-4xl md:text-5xl font-bold mb-2 ${
        darkMode ? 'text-white' : 'text-gray-800'
      }`}>
        Task Manager
      </h1>
      <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
        Organize your tasks efficiently
      </p>
    </header>
  );
};

export default Header;
