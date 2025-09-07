import { setLanguage } from "@/store/slice/languageSlice";
import { RootState } from "@/store/store";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

const LanguageSwitch: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.value);
  const dispatch = useDispatch();

  return (
    <div className="relative w-20 h-6 bg-gray-200 rounded-full flex items-center text-xs">
      {/* Sliding Background */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-[var(--primary)] rounded-full"
        animate={{ x: language === "bn" ? 40 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* EN Button */}
      <div
        onClick={() => dispatch(setLanguage("en"))}
        className={`flex-1 z-10 flex items-center justify-center cursor-pointer transition-colors duration-200 ${
          language === "en" ? "text-white" : "text-gray-700"
        }`}
      >
        Eng
      </div>

      {/* BN Button */}
      <div
        onClick={() => dispatch(setLanguage("bn"))}
        className={`flex-1 z-10 flex items-center justify-center cursor-pointer transition-colors duration-200 ${
          language === "bn" ? "text-white" : "text-gray-700"
        }`}
      >
        বাংলা
      </div>
    </div>
  );
};

export default LanguageSwitch;
