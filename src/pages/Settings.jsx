import { useEffect, useState } from 'react'
import useLocationStore from '../states/locationState'
import useAlert from '../states/alertState'
import useMode from '../states/modeState'
import { getCurrentLocation } from '../utils/location'
import { CiSettings, CiTempHigh } from 'react-icons/ci'
import { WiMoonAltWaningCrescent1 } from 'react-icons/wi'
import { MdPlace } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

const Settings = () => {
  const { currentLocation, setCurrentLocation } = useLocationStore()
  const { setIsAlert, setMessage } = useAlert()
  const { isLight, toggleMode, bgMode, textMode } = useMode()
  const [defaultCity, setDefaultCity] = useState(currentLocation || '')
  const [useGeolocation, setUseGeolocation] = useState(false)
  const navigate = useNavigate()
  // const [unit, setUnit] = useState('C')

  const handleBack = () => {
    navigate('/')
  }
  const handleSaveCity = () => {
    setCurrentLocation(defaultCity) 
  }

  useEffect(() => {
    if (useGeolocation) {
      getCurrentLocation(setIsAlert, setMessage).then((res) => {
        setDefaultCity(res)
        setCurrentLocation(res)
      })
    }
  }, [useGeolocation])

  const handleLocationToggle = () => {
    setUseGeolocation(prev => !prev)
  }

  return (
    <div className="h-full w-full p-6 mx-auto" style={{ backgroundColor: bgMode, color: textMode }}>
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"><CiSettings size={30}/> Sozlamalar</h1>

      {/*  toggle */}
      <div className="flex justify-between items-center mb-4">
        <span className='flex items-center gap-1'><WiMoonAltWaningCrescent1/> Rejim:</span>
        <motion.button whileTap={{ scale: 0.8 }} onClick={toggleMode} className="px-4 py-2 bg-blue-500 text-white rounded">
          {isLight ? 'Dark Mode' : 'Light Mode'}
        </motion.button>
      </div>

      {/* Def shahar */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Hozirgi joylashuv:</label>
        <input
          value={defaultCity}
          onChange={(e) => setDefaultCity(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Masalan: Tashkent"
        />
        <motion.button 
          whileTap={{ scale: 0.8 }}
          onClick={handleSaveCity}
          className="mt-2 bg-green-500 text-white py-2 px-4 rounded cursor-pointer"
        >
          Saqlash
        </motion.button>
      </div>

      {/* Geolocation toggle */}
      <div className="flex justify-between items-center mb-4">
        <span className='flex items-center gap-1'><MdPlace/> Joylashuvdan aniqlash:</span>
        <input
          type="checkbox"
          checked={useGeolocation}
          onChange={handleLocationToggle}
        />
      </div>

 {/* gradusdan farangeitga o'tish */}
      {/* <div className="flex justify-between items-center mb-4">
        <span className='flex items-center gap-1'><CiTempHigh color='red'/> Harorat birligi:</span>
        <select value={unit} onChange={(e) => setUnit(e.target.value)} className="p-2 rounded border">
          <option value='false'>°C</option>
          <option value="true">°F</option>
        </select>
      </div> */}

      {/* Homega qaytish */}
      <motion.button onClick={handleBack}
                     whileTap={{ scale: 0.8 }} 
                     className="px-4 py-2 cursor-pointer bg-blue-500 rounded-md">
        ortga qaytish
      </motion.button>
    </div>
  )
}

export default Settings