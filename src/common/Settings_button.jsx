import { motion } from "framer-motion"
import { CiSettings } from "react-icons/ci"
import { useNavigate } from "react-router"

const SettingsButton = () => {

    const navigate = useNavigate()
    
  return (
    <motion.button 
          onClick={() => navigate('/settings')}
          whileHover="hover"
          className="bg-transparent sm:bg-blue-500 text-white  px-4 py-2 rounded-lg hover:bg-blue-600 
                       transition flex  items-center cursor-pointer gap-2" >
           
           <motion.span  variants={{ hover: { rotate: 360 } }}
                         transition={{ duration: 0.5 }}
                         className="text-blue-600 sm:text-white"  >
                  <CiSettings size={30} />
           </motion.span>
            <p className="hidden sm:block">Settings</p> 
        </motion.button>
  )
}

export default SettingsButton