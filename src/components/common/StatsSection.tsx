import React, { useEffect, useState } from "react";

interface Stat {
  label: string;
  value: string;
}

const stats: Stat[] = [
  { label: "Active Merchants", value: "10K+" },
  { label: "Banks & Partners", value: "30+" },
  { label: "Payment Options", value: "50+" },
  { label: "Support", value: "24/7" },
];

const StatsSection: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100); // trigger animation after mount
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-indigo-600/40 text-white py-6 md:py-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`
              transform transition-all duration-500 ease-out
              ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-90"}
              hover:scale-105
            `}
            style={{ transitionDelay: `${idx * 150}ms` }} // stagger effect
          >
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold">{stat.value}</h3>
            <p className="text-[11px] md:text-sm mt-1">{stat.label}</p>
            <div className="border-t border-white/30 mt-2 w-10 mx-auto"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
