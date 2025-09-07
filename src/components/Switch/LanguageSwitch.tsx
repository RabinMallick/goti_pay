import { motion } from "framer-motion";

interface languageProps {
    setLanguage: (lang: string) => void;
    language: string;
}

const LanguageSwitch: React.FC<languageProps> = ({
    setLanguage,
    language,
}) => {


    return (
        <div className="relative w-20 h-6 bg-gray-200 rounded-full flex items-center text-xs">
            {/* Sliding Background */}
            <motion.div
                className="absolute top-0 left-0 w-1/2 h-full bg-[var(--primary)] rounded-full"
                animate={{ x: language === 'bn' ? 40 : 0 }} // 40px = half width
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />

            {/* EN Button */}
            <div
                onClick={() => setLanguage('en')}
                className={`flex-1 z-10 flex items-center justify-center cursor-pointer transition-colors duration-200 
              ${language === 'en' ? 'text-white' : 'text-gray-700'}`}
            >
                Eng
            </div>

            {/* BN Button */}
            <div
                onClick={() => setLanguage('bn')}
                className={`flex-1 z-10 flex items-center justify-center cursor-pointer transition-colors duration-200 
              ${language === 'bn' ? 'text-white' : 'text-gray-700'}`}
            >
                বাংলা
            </div>
        </div>
    );
};

export default LanguageSwitch;
