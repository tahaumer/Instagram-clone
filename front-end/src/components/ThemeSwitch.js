import React from 'react'
import { useState, useEffect } from "react";

const ThemeSwitch = () => {
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  useEffect(() => {
    const initialTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initialTheme);

    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="flex text-black dark:text-white justify-center items-center">
      <label className="switch">
        <input type="checkbox" checked={theme === 'dark'} onChange={handleThemeSwitch} />
        <span className="slider round" />
      </label>
      
    </div>
  );
};

export default ThemeSwitch;