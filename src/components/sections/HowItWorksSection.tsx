"use client";

import {motion} from "framer-motion";
import {strings} from "@/content";
import {fadeInUp, staggerContainer} from "@/components/shared/animations";

export const HowItWorksSection = () => {
    return (
        <section
            className="py-20 bg-white"
            aria-label={strings.howItWorks.ariaLabels.howItWorksSection}
        >
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    {...fadeInUp}
                    className="text-3xl font-semibold mb-12"
                >
                    {strings.howItWorks.sectionTitle}
                </motion.h2>
                <motion.div
                    className="grid md:grid-cols-3 gap-10"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true, margin: "-100px"}}
                >
                    {strings.howItWorks.steps.map((step, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                initial: {opacity: 0, scale: 0.8, y: 30},
                                animate: {opacity: 1, scale: 1, y: 0}
                            }}
                            transition={{duration: 0.6, ease: "easeOut"}}
                            whileHover={{
                                scale: 1.05,
                                transition: {duration: 0.2}
                            }}
                            className="p-6 border rounded-2xl shadow-sm bg-gray-50"
                            aria-label={strings.howItWorks.ariaLabels.stepCard}
                        >
                            <motion.div
                                initial={{scale: 0}}
                                whileInView={{scale: 1}}
                                transition={{
                                    delay: i * 0.2 + 0.3,
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                                className="text-3xl font-bold text-blue-600 mb-3"
                            >
                                {i + 1}
                            </motion.div>
                            <p className="text-gray-700">{step}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
