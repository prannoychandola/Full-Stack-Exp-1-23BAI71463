import { useState, useEffect } from 'react'

export default function Header() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <header>
      <h1>My First SPA</h1>
      <p>Created with React & Vite</p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  )
}
