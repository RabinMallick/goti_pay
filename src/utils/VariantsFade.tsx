// utils/VariantsFade.ts
import { Variants } from "framer-motion";

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
};

export const fadeDown: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
};

export const zoomIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};


export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -15 }, // start rotated and invisible
  visible: (i: number = 0) => ({
    opacity: 1,
    rotate: 0, // rotate to normal
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};


// utils/VariantsFade.ts
export const arrowVariants = {
    open: { rotate: 180, transition: { duration: 0.3, ease: "easeOut" } },
    closed: { rotate: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export const topItemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const secondItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export const bottomItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
