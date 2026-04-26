"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import {strings} from "@/content";
import {fadeInUp, staggerContainer} from "@/components/shared/animations";

export const AboutStorySection = () => {
    return (
        <section className="py-24 bg-white" aria-label={strings.about.ariaLabels.storySection}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Header Section */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="text-center mb-12"
                >
                    <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {strings.about.heroTitle}
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.1}}
                        className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                        {strings.about.heroDescription}
                    </motion.p>
                </motion.div>

                {/* Two Column Grid */}
                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    {/* Story Box - Left */}
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                    >
                        <motion.h2 {...fadeInUp} className="text-3xl font-semibold text-gray-900 mb-8">
                            {strings.about.storyTitle}
                        </motion.h2>

                        <div className="space-y-5">
                            {strings.about.storyParagraphs.map((paragraph, index) => (
                                <motion.p
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: 0.1 * index}}
                                    className="text-gray-700 leading-relaxed"
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image - Right */}
                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                        className="rounded-2xl overflow-hidden shadow-lg"
                    >
                        <Image
                            src="/images/proveedora-lubricantes-story.jpg"
                            alt={strings.about.imageAlt}
                            width={500}
                            height={450}
                            className="object-cover w-full h-full"
                            priority={false}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

