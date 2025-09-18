import React from "react";

// Step interface
interface Step {
  step: string;
  title: string;
  desc: string;
}

// Steps array
const steps: Step[] = [
  { step: "1", title: "Sign Up", desc: "Create your merchant account with easy online onboarding." },
  { step: "2", title: "Integrate", desc: "Use our APIs, SDKs or plugins to connect your platform." },
  { step: "3", title: "Go Live", desc: "Start accepting payments instantly with secure transactions." },
];

const HowItWorks = () => {
  return (
    <section className="py-12 px-3 mx-auto relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-10 text-gray-900">
          How It Works
        </h2>

        <div className="relative grid md:grid-cols-3 gap-6">
          {/* Connector line: horizontal for desktop, vertical for mobile */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-400 z-0"></div>
          <div className="block md:hidden absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-400 via-indigo-300 to-indigo-400 z-0"></div>

          {steps.map((s, idx) => (
            <div
              key={idx}
              className="relative z-10 flex flex-col items-center backdrop-blur-sm bg-white/20 border border-white/30 rounded-md p-3 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-600 text-white text-sm sm:text-lg font-bold mb-2  sm:mb-5 shadow">
                {s.step}
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-1 text-gray-900">{s.title}</h3>
              <p className="text-xs sm:text-sm text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative glass circles */}
      {/* Desktop */}
      <div className="absolute top-0 left-0 w-28 h-28 bg-pink-500/30 backdrop-blur-xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 bg-indigo-200/20 backdrop-blur-xl rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
 
    </section>
  );
};

export default HowItWorks;
