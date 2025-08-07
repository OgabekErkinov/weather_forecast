import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";

const SearchPanel = () => {
  return (
    <div className="h-[50px] w-[80%] sm:w-[300px] border border-gray-300 
                    rounded-full bg-white shadow-sm">
        <div className="h-full w-full flex justify-center items-center p-2">

          {/* input to insert country name */}
           <input  type="text"
                   placeholder="Qidirish..."
                   className="w-[90%] flex-grow h-full bg-transparent outline-none
                              text-md font-bold text-gray-700" />
          
          {/* search button */}
           <motion.button
              whileTap={{ scale: 0.85 }}
              className="text-gray-600 hover:text-blue-500 transition-colors duration-200 cursor-pointer">
              <CiSearch size={24} />
           </motion.button>
        </div>
    </div>
  );
};

export default SearchPanel;
