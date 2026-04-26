"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import type {ReactElement} from "react";
import {FaFacebookSquare, FaInstagram, FaWhatsapp} from "react-icons/fa";
import {strings} from "@/content/strings";

export const Footer = () => {
    const socialHoverStyles: Record<string, string> = {
        facebook: "hover:text-blue-400",
        instagram: "hover:text-pink-400",
        whatsapp: "hover:text-green-400"
    };

    const socialIcons: Record<string, ReactElement> = {
        facebook: <FaFacebookSquare className="h-6 w-6" aria-hidden="true" />,
        instagram: <FaInstagram className="h-6 w-6" aria-hidden="true" />,
        whatsapp: <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
    };

    return (
        <motion.footer
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className="bg-linear-to-b from-gray-900 via-gray-900 to-gray-950 text-gray-300"
            aria-label={strings.footer.ariaLabels.footer}
        >
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                    <section aria-label={strings.footer.brand.title}>
                        <Image
                            src="/images/autocheck-logo-white.png"
                            alt={strings.footer.brand.title}
                            width={142}
                            height={40}
                            className="mb-3 h-auto w-auto max-w-[142px]"
                        />
                        <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
                            {strings.footer.brand.description}
                        </p>
                    </section>

                    <section aria-label={strings.footer.locations.title}>
                        <h3 className="text-base font-semibold text-white mb-3">
                            {strings.footer.locations.title}
                        </h3>
                        <nav className="flex flex-col space-y-2" aria-label={strings.footer.locations.title}>
                            {strings.footer.locations.items.map((location) => (
                                <a
                                    key={location.href}
                                    href={location.href}
                                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                                    aria-label={`${strings.footer.ariaLabels.locationLink}: ${location.label}`}
                                >
                                    {location.label}
                                </a>
                            ))}
                        </nav>
                    </section>

                    <section aria-label={strings.footer.social.title}>
                        <h3 className="text-base font-semibold text-white mb-3">
                            {strings.footer.social.title}
                        </h3>
                        <nav className="flex items-center gap-4" aria-label={strings.footer.social.title}>
                            {strings.footer.social.items.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center justify-center rounded-full text-gray-400 transition-colors duration-200 ${socialHoverStyles[item.platform] ?? "hover:text-white"}`}
                                    aria-label={`${strings.footer.ariaLabels.socialLink}: ${item.label}`}
                                >
                                    {socialIcons[item.platform]}
                                </a>
                            ))}
                        </nav>
                    </section>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
                    {strings.footer.copyright}
                </div>
            </div>
        </motion.footer>
    );
};
