import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";

const SearchPanel = () => {
  return (
    <div className="h-[50px] w-[200px]flex items-center gap-2 px-3 border border-gray-300 rounded-full bg-white shadow-sm">
      <input
        type="text"
        placeholder="Qidirish..."
        className="flex-grow h-full bg-transparent outline-none text-md font-bold text-gray-700"
      />
      <motion.button
        whileTap={{ scale: 0.85 }}
        className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
      >
        <CiSearch size={24} />
      </motion.button>
    </div>
  );
};

export default SearchPanel;
