"use client";

import {motion} from "framer-motion";
import {strings} from "@/content";

export const Footer = () => {
    return (
        <motion.footer
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className="py-10 bg-gray-900 text-gray-300 text-center text-sm"
            aria-label={strings.footer.ariaLabels.footer}
        >
            © {new Date().getFullYear()} {strings.footer.copyright}
        </motion.footer>
    );
};
