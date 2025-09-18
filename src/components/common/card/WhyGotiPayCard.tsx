import React from 'react';

interface WhyGotiPayCardProps {
    feature: {
        icon: React.ReactNode;
        title: string;
        desc: string;
    };
}

const WhyGotiPayCard: React.FC<WhyGotiPayCardProps> = ({ feature }) => {
    return (
        <div
            className="relative group flex items-center gap-6 p-3 md:p-4 rounded-lg cursor-pointer
                 bg-white/60 dark:bg-gray-900/40 backdrop-blur-lg
                 border border-gray-200/40 dark:border-gray-700/40
                 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1
                 transition-transform duration-500 ease-out overflow-hidden"
        >
            {/* Soft Gradient Glow Border */}
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-700" />

            {/* Floating Particles */}
            <span className="absolute -top-5 -left-5 w-16 h-16 bg-pink-400/5 rounded-full blur-xl
                       group-hover:scale-105 group-hover:-translate-x-1 group-hover:-translate-y-1
                       transition-transform duration-700 ease-in-out" />
            <span className="absolute -bottom-6 right-4 w-20 h-20 bg-indigo-400/5 rounded-full blur-xl
                       group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1
                       transition-transform duration-700 ease-in-out delay-150" />

            {/* Icon */}
            <div className="flex-shrink-0 h-10 md:w-16 w-10 md:h-16 flex items-center justify-center rounded-lg 
                      bg-gradient-to-br from-indigo-50 to-purple-50 
                      text-indigo-600 text-3xl 
                      group-hover:from-indigo-500 group-hover:to-purple-500 
                      group-hover:text-white 
                      transition-all duration-700 shadow relative z-20">
                {feature.icon}
            </div>

            {/* Text Section */}
            <div className="relative z-20 text-start">
                <h4 className="font-bold text-xs md:text-[15px] mb-2 text-gray-900 dark:text-gray-100 
                       group-hover:text-indigo-500 transition-colors duration-500">
                    {feature.title}
                </h4>
                <p className="text-gray-600 text-[10px] md:text-xs leading-relaxed">
                    {feature.desc}
                </p>
            </div>

            {/* Shine Effect */}
            <span
                className="absolute -top-1/2 left-1/4 w-2/3 h-[200%] 
                   bg-gradient-to-t from-transparent via-white/5 to-transparent 
                   rotate-45
                   group-hover:translate-y-2
                   transition-transform duration-700 ease-out z-10"
            />
        </div>
    );
};

export default WhyGotiPayCard;
