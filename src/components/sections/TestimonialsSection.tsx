
"use client";

import {motion} from "framer-motion";
import {strings} from "@/content";
import {fadeInUp} from "@/components/shared/animations";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const TestimonialsSection = () => {
    const testimonialsList = [
        strings.testimonials.items.carlos,
        strings.testimonials.items.dianaS,
        strings.testimonials.items.luisBarba,
        strings.testimonials.items.jessica
    ];

    return (
        <section
            className="py-20 bg-gray-50"
            aria-label={strings.testimonials.ariaLabels.testimonialsSection}
        >
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    {...fadeInUp}
                    className="text-3xl font-semibold mb-12"
                >
                    {strings.testimonials.sectionTitle}
                </motion.h2>

                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    viewport={{once: true, margin: "-100px"}}
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoHeight
                        navigation
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        loop={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 1.2,
                                centeredSlides: true
                            },
                            1024: {
                                slidesPerView: 1.5,
                                centeredSlides: true
                            }
                        }}
                        className="testimonials-slider"
                    >
                        {testimonialsList.map((testimonial, i) => (
                            <SwiperSlide key={i}>
                                <motion.div
                                    whileHover={{
                                        scale: 1.02,
                                        transition: {duration: 0.2}
                                    }}
                                    className="p-8 bg-white rounded-2xl shadow-lg mx-4 flex flex-col gap-5"
                                    aria-label={strings.testimonials.ariaLabels.testimonialCard}
                                >
                                    <motion.p
                                        initial={{opacity: 0}}
                                        whileInView={{opacity: 1}}
                                        transition={{delay: 0.3, duration: 0.6}}
                                        className="text-gray-600 italic text-lg leading-relaxed"
                                    >
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </motion.p>
                                    <motion.p
                                        initial={{opacity: 0}}
                                        whileInView={{opacity: 1}}
                                        transition={{delay: 0.5, duration: 0.6}}
                                        className="font-semibold text-gray-800"
                                    >
                                        {testimonial.name}
                                    </motion.p>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>

            <style jsx global>{`
                .testimonials-slider {
                    padding-bottom: 2.5rem;
                }

                .testimonials-slider .swiper-pagination {
                    bottom: 0 !important;
                }

                .testimonials-slider .swiper-pagination-bullet {
                    background: #3b82f6;
                    opacity: 0.3;
                }

                .testimonials-slider .swiper-pagination-bullet-active {
                    opacity: 1;
                }

                .testimonials-slider .swiper-button-next,
                .testimonials-slider .swiper-button-prev {
                    color: #3b82f6;
                    background: rgba(255, 255, 255, 0.9);
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    margin-top: -16px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    padding: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .testimonials-slider .swiper-button-next:after,
                .testimonials-slider .swiper-button-prev:after {
                    font-size: 14px;
                    font-weight: bold;
                }
            `}</style>
        </section>
    );
};
