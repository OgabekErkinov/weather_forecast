import { motion } from "framer-motion"
import { CiSettings } from "react-icons/ci"
import { useNavigate } from "react-router"

const Settings_button = () => {

    const navigate = useNavigate()
    
  return (
    <motion.button 
          onClick={() => navigate('/settings')}
          whileHover="hover"
          className="bg-blue-500 text-white  px-4 py-2 rounded-lg hover:bg-blue-600 
                       transition hidden sm:flex  items-center cursor-pointer gap-2" >
           <motion.span  variants={{ hover: { rotate: 360 } }}
                         transition={{ duration: 0.5 }}  >
                  <CiSettings size={20} />
           </motion.span>
            Settings
        </motion.button>
  )
}

export default Settings_button