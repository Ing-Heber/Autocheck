"use client";

import {motion} from "framer-motion";
import {Button} from "@/components/ui";
import {strings} from "@/content";

export const CTASection = () => {
    return (
        <motion.section
            id={'cta'}
            className="relative py-36 bg-blue-600 bg-cover bg-center bg-no-repeat text-white text-center"
            style={{backgroundImage: "url('/images/car-cta-md-res.jpg')"}}
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true, margin: "-100px"}}
            aria-label={strings.cta.ariaLabels.ctaSection}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="text-3xl font-semibold mb-6"
                >
                    {strings.cta.title}
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.4}}
                    className="mb-8 text-blue-100"
                >
                    {strings.cta.description}
                </motion.p>
                <Button
                    variant="secondary"
                    size="lg"
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5, delay: 0.6}}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        transition: {duration: 0.2}
                    }}
                    onClick={() => console.log("Book now clicked")}
                    aria-label={strings.cta.ariaLabels.ctaButton}
                >
                    {strings.cta.ctaButton}
                </Button>
            </div>
        </motion.section>
    );
};
