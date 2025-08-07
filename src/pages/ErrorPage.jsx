import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import useLocationStore from '../states/locationState'

const ErrorPage = () => {
  const { setCurrentLocation } = useLocationStore()

  const navigate = useNavigate()
  const handleNavigate = () => {
    setCurrentLocation('Tashkent')
    navigate('/')
  }

  return (
    <motion.div
      className="h-full w-full flex flex-col justify-center items-center bg-gradient-to-br
               from-blue-300 to-blue-600 text-white text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }} >

      <motion.img
        src="https://cdn.weatherapi.com/weather/64x64/day/116.png"
        alt="Weather error"
        className="w-24 h-24 mb-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }} />

      <motion.h1 
        className="text-6xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }} >
        404
      </motion.h1>

      <motion.p
        className="text-xl mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}  >
        Afsus, ob-havo ma'lumoti topilmadi!
      </motion.p>

      <motion.p
        className="mb-6 text-sm opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }} >
        Sahifa mavjud emas yoki kiritilgan shahar noto‘g‘ri.
      </motion.p>

      <motion.button
        onClick={()=>navigate('/')}
        className="px-6 py-2 bg-white text-blue-600 rounded-xl shadow-md hover:bg-gray-200 transition cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        Bosh sahifaga qaytish
      </motion.button>
    </motion.div>
  )
}

export default ErrorPage
