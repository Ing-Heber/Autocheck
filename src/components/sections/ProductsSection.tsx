"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import {strings} from "@/content";
import {fadeInUp, staggerContainer} from "@/components/shared/animations";

export const ProductsSection = () => {
    const productsList = [
        strings.products.items.mobilOil,
        strings.products.items.mannAirFilter,
        strings.products.items.ngkSparkPlug
    ];

    return (
        <section
            id="products"
            className="py-20 bg-gray-50"
            aria-label={strings.products.ariaLabels.productsSection}
        >
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    {...fadeInUp}
                    className="text-3xl font-semibold mb-12"
                >
                    {strings.products.sectionTitle}
                </motion.h2>
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true, margin: "-100px"}}
                >
                    {productsList.map((product, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                initial: {opacity: 0, y: 50},
                                animate: {opacity: 1, y: 0}
                            }}
                            transition={{duration: 0.6, ease: "easeOut"}}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                                transition: {duration: 0.3}
                            }}
                            className="p-8 rounded-2xl shadow-sm bg-white border border-gray-100"
                            aria-label={strings.products.ariaLabels.productCard}
                        >
                            <motion.div
                                whileHover={{scale: 1.1}}
                                transition={{duration: 0.3}}
                            >
                                <Image
                                    src={product.image.url}
                                    alt={product.name}
                                    width={200}
                                    height={200}
                                    className="mx-auto mb-4 rounded-xl"
                                />
                            </motion.div>
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-500">{product.type}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
