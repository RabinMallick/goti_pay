import { Variants } from "framer-motion";

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
};

export const fadeDown: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
};

export const zoomIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
};

export const rotateIn: Variants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: (i: number = 0) => ({
        opacity: 1,
        rotate: 0,
        transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
    }),
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export const arrowVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
};