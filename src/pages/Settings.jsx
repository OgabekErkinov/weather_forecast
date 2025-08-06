import React, { useState, useEffect } from 'react'

const Settings = () => {
  const [theme, setTheme] = useState('light')
  const [defaultCity, setDefaultCity] = useState(localStorage.getItem('defaultCity') || '')
  const [useGeolocation, setUseGeolocation] = useState(false)
  const [unit, setUnit] = useState('C') // C or F

  // Save default city
  const handleSaveCity = () => {
    localStorage.setItem('defaultCity', defaultCity)
    alert('Shahar saqlandi!')
  }

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  // Clear cache (query + localStorage)
  const handleClearCache = () => {
    localStorage.clear()
    alert('Kesh tozalandi!')
    window.location.reload()
  }

  return (
    <div className="p-6 max-w-xl mx-auto text-gray-800 dark:text-white bg-white dark:bg-gray-900 shadow-xl rounded-2xl mt-10">
      <h1 className="text-2xl font-bold mb-4">⚙️ Sozlamalar</h1>

      {/* Theme toggle */}
      <div className="flex justify-between items-center mb-4">
        <span>🌗 Rejim:</span>
        <button onClick={toggleTheme} className="px-4 py-2 bg-blue-500 text-white rounded">
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>

      {/* Default City */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">🌆 Default shahar:</label>
        <input
          value={defaultCity}
          onChange={(e) => setDefaultCity(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Masalan: Tashkent"
        />
        <button onClick={handleSaveCity} className="mt-2 bg-green-500 text-white px-4 py-1 rounded">
          Saqlash
        </button>
      </div>

      {/* Geolocation toggle */}
      <div className="flex justify-between items-center mb-4">
        <span>📍 Joylashuvdan aniqlash:</span>
        <input
          type="checkbox"
          checked={useGeolocation}
          onChange={() => setUseGeolocation(!useGeolocation)}
        />
      </div>

      {/* Units toggle */}
      <div className="flex justify-between items-center mb-4">
        <span>🌡 Harorat birligi:</span>
        <select value={unit} onChange={(e) => setUnit(e.target.value)} className="p-2 rounded border">
          <option value="C">°C</option>
          <option value="F">°F</option>
        </select>
      </div>

      {/* Clear cache */}
      <div className="mt-6">
        <button onClick={handleClearCache} className="bg-red-500 text-white px-4 py-2 rounded">
          🧼 Keshni tozalash
        </button>
      </div>
    </div>
  )
}

export default Settings
