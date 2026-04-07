"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {useState, useEffect} from "react";
import {strings} from "@/content/strings";
import Image from "next/image";


const navbarVariant = {
    initial: {opacity: 0},
    animate: {opacity: 1}
};

const navbarTransition = {
    duration: 1.2,
    delay: 0.5,
    ease: "easeOut" as const
};

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const innerHeight = window.innerHeight;
            setIsScrolled(scrollPosition > innerHeight); // Change background after the user goes down the hero
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-md'
                    : 'bg-transparent backdrop-blur-sm'
            }`}
            variants={navbarVariant}
            initial="initial"
            animate="animate"
            transition={navbarTransition}
            aria-label={strings.navbar.ariaLabels.navbar}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className={`text-2xl font-bold transition-colors ${
                                isScrolled
                                    ? 'text-gray-900 hover:text-gray-700'
                                    : 'text-white hover:text-gray-200'
                            }`}
                            aria-label={strings.navbar.ariaLabels.logo}
                        >
                            <Image
                                src="/images/autocheck-logo.png"
                                alt={strings.navbar.logo}
                                width={324}
                                height={91}
                                className="h-10 w-auto"
                            />

                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <button
                                onClick={() => scrollToSection('locations')}
                                className={`px-3 py-2 text-sm font-medium transition-colors pointer-cursor ${
                                    isScrolled
                                        ? 'text-gray-900 hover:text-gray-700'
                                        : 'text-white hover:text-gray-200'
                                }`}
                                aria-label={strings.navbar.ariaLabels.locationsLink}
                            >
                                {strings.navbar.links.locations}
                            </button>
                            <button
                                onClick={() => scrollToSection('cta')}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors pointer-cursor"
                                aria-label={strings.navbar.ariaLabels.contactLink}
                            >
                                {strings.navbar.links.contact}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset transition-colors ${
                                isScrolled
                                    ? 'text-gray-900 hover:text-gray-700 focus:ring-gray-500'
                                    : 'text-white hover:text-gray-200 focus:ring-white'
                            }`}
                            aria-label={strings.navbar.ariaLabels.mobileMenuToggle}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
