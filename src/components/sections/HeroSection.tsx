"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {Button} from "@/components/ui";
import {hero} from "@/data";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                loop
                effect="fade"
                fadeEffect={{crossFade: true}}
                autoplay={{delay: 20000, pauseOnMouseEnter: true, waitForTransition: true}}
                pagination={{clickable: true}}
                slidesPerView={1}
                className="min-h-screen"
            >
                {hero.map((slide, idx) => (
                    <SwiperSlide key={`${slide.title}-${idx}`}>
                        <motion.section
                            className={[
                                "relative min-h-screen flex items-center justify-center bg-no-repeat",
                                slide.styles?.sectionClassName ?? "bg-center"
                            ].join(" ")}
                            style={{
                                backgroundImage: `url('${slide.imageUrl}')`,
                                backgroundPosition: slide.styles?.backgroundPosition,
                                backgroundSize: slide.styles?.backgroundSize ?? 'cover',
                            }}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.8}}
                            aria-label={slide.ariaLabels.heroSection}
                        >
                            {/* Background overlay for better text readability */}
                            <div
                                className={[
                                    "absolute inset-0 bg-black/60",
                                    slide.styles?.overlayClassName ?? ""
                                ].join(" ")}
                            />

                            {/* Content container */}
                            <div
                                className={[
                                    "relative z-10 px-4 flex flex-col gap-0",
                                    slide.styles?.contentClassName ?? "max-w-4xl items-start text-left"
                                ].join(" ")}
                            >
                                <motion.h1
                                    initial={{opacity: 0, y: 40}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8, delay: 0.15, ease: "easeOut"}}
                                    className={[
                                        "font-bold mb-6 text-white drop-shadow-lg whitespace-pre-line",
                                        slide.styles?.titleClassName ?? "text-5xl md:text-6xl lg:text-7xl"
                                    ].join(" ")}
                                >
                                    {slide.title}
                                    {slide.titleHighlight ? (
                                        <span className="text-white"> {slide.titleHighlight}</span>
                                    ) : null}
                                </motion.h1>

                                <motion.p
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: 0.35}}
                                    className={[
                                        "text-gray-200 font-medium mb-8 text-lg md:text-xl drop-shadow-md whitespace-pre-line",
                                        slide.styles?.descriptionClassName ?? "max-w-2xl"
                                    ].join(" ")}
                                >
                                    {slide.description}
                                </motion.p>

                                {slide.url ? (
                                    <Link href={slide.url} passHref>
                                        <Button
                                            size="lg"
                                            initial={{opacity: 0, scale: 0.8}}
                                            animate={{opacity: 1, scale: 1}}
                                            transition={{duration: 0.5, delay: 0.55}}
                                            whileHover={{scale: 1.05, transition: {duration: 0.2}}}
                                            whileTap={{scale: 0.98}}
                                            className={[
                                                "border-2 border-white bg-transparent text-white hover:bg-gray-100 hover:text-gray-900 px-8 py-4 text-lg font-semibold shadow-lg",
                                                slide.styles?.ctaClassName ?? ""
                                            ].join(" ")}
                                        >
                                            {slide.ctaButton}
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button
                                        size="lg"
                                        initial={{opacity: 0, scale: 0.8}}
                                        animate={{opacity: 1, scale: 1}}
                                        transition={{duration: 0.5, delay: 0.55}}
                                        whileHover={{scale: 1.05, transition: {duration: 0.2}}}
                                        whileTap={{scale: 0.98}}
                                        onClick={() => console.log("Hero CTA clicked")}
                                        className={[
                                            "border-2 border-white bg-transparent text-white hover:bg-gray-100 hover:text-gray-900 px-8 py-4 text-lg font-semibold shadow-lg",
                                            slide.styles?.ctaClassName ?? ""
                                        ].join(" ")}
                                    >
                                        {slide.ctaButton}
                                    </Button>
                                )}
                            </div>
                        </motion.section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
