"use client";

import {motion} from "framer-motion";
import {strings} from "@/content";
import {fadeInUp, staggerContainer} from "@/components/shared/animations";

export const ServicesSection = () => {
    const servicesList = [
        strings.services.items.oilChange,
        strings.services.items.airFilter,
        strings.services.items.sparkPlug
    ];

    return (
        <section
            id="services"
            className="py-20 bg-white"
            aria-label={strings.services.ariaLabels.servicesSection}
        >
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    {...fadeInUp}
                    className="text-3xl font-semibold mb-12"
                >
                    {strings.services.sectionTitle}
                </motion.h2>
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true, margin: "-100px"}}
                >
                    {servicesList.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                initial: {opacity: 0, y: 50, scale: 0.9},
                                animate: {opacity: 1, y: 0, scale: 1}
                            }}
                            transition={{duration: 0.6, ease: "easeOut"}}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: {duration: 0.3}
                            }}
                            className="p-8 rounded-2xl shadow-md bg-gray-50 cursor-pointer"
                            aria-label={strings.services.ariaLabels.serviceCard}
                        >
                            <motion.div
                                className="text-5xl mb-4"
                                whileHover={{
                                    rotate: [0, -10, 10, 0],
                                    transition: {duration: 0.5}
                                }}
                            >
                                {service.icon}
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
