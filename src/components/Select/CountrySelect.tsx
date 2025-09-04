"use client";
import { useState, useRef, useEffect } from "react";
import "flag-icons/css/flag-icons.min.css";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { arrowVariants } from "@/utils/VariantsFade";

interface Country {
    code: string;
    name: string;
}

const countries: Country[] = [
    { code: "bd", name: "Bangladesh" },
    { code: "in", name: "India" },
    { code: "sg", name: "Singapore" },
    { code: "ae", name: "United Arab Emirates" },
    { code: "my", name: "Malaysia" },
];

export default function CountrySelect() {
    const [selected, setSelected] = useState<Country>({ code: "bd", name: "Bangladesh" });
    const [open, setOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Dropdown animation variants
    const dropdownVariants = {
        open: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
        closed: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } },
    };

    return (
        <div className="relative inline-block w-full md:w-auto" ref={dropdownRef}>
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between rounded gap-2 py-1 text-sm  cursor-pointer bg-white"
                onClick={() => setOpen((prev) => !prev)}
            >
                <div className="flex items-center gap-2 md:gap-0">
                    <span className={`fi fi-${selected.code}`}></span>
                    <span className="text-[12px] block md:hidden">{selected.name}</span>
                </div>
                <motion.div
                    animate={open ? "open" : "closed"}
                    // variants={arrowVariants}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown size={12} />
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        key="dropdown"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownVariants}
                        className="absolute left-0 mt-3 w-40 bg-white border border-gray-200 rounded shadow-md overflow-hidden z-20 origin-top max-h-60 overflow-y-auto scrollbar-none"
                    >
                        {countries.map((c) => (
                            <motion.div
                                key={c.code}
                                whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
                                className="flex items-center gap-2 px-3 py-2 cursor-pointer"
                                onClick={() => {
                                    setSelected({ code: c.code, name: c.name });
                                    setOpen(false);
                                }}
                            >
                                <span className={`fi fi-${c.code}`}></span>
                                <span className="text-[12px]">{c.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
