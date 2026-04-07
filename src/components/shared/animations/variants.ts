import {easeOut} from "framer-motion";

export const fadeInUp = {
    initial: {opacity: 0, y: 60},
    animate: {opacity: 1, y: 0},
    transition: {duration: 0.6, ease: easeOut}
};

export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const slideInLeft = {
    initial: {opacity: 0, x: -60},
    animate: {opacity: 1, x: 0},
    transition: {duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94]} // easeOut bezier curve
};

export const scaleIn = {
    initial: {opacity: 0, scale: 0.8},
    animate: {opacity: 1, scale: 1},
    transition: {duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]} // easeOut bezier curve
};

export const slideFromSides = (isEven: boolean) => ({
    initial: {opacity: 0, x: isEven ? -50 : 50},
    animate: {opacity: 1, x: 0}
});
