"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {type ReactElement, useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {strings} from "@/content/strings";
import Image from "next/image";
import {FaFacebookSquare, FaInstagram, FaWhatsapp} from "react-icons/fa";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const isHomeRoute = pathname === "/";
    const useSolidNavbar = !isHomeRoute || isScrolled;

    useEffect(() => {
        if (!isHomeRoute) {
            setIsScrolled(false);
            return;
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const innerHeight = window.innerHeight;
            setIsScrolled(scrollPosition > innerHeight); // Change background after the user goes down the hero
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomeRoute]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!isMobileMenuOpen) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const previousBodyOverflow = document.body.style.overflow;
        const previousHtmlOverflow = document.documentElement.style.overflow;

        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = previousBodyOverflow;
            document.documentElement.style.overflow = previousHtmlOverflow;
        };
    }, [isMobileMenuOpen]);


    const handlePartnersClick = () => {
        setIsMobileMenuOpen(false);
        if (pathname === "/partners") {
            return;
        }

        router.push("/partners");
    };

    const socialIcons: Record<string, ReactElement> = {
        facebook: <FaFacebookSquare className="h-7 w-7" aria-hidden="true"/>,
        instagram: <FaInstagram className="h-7 w-7" aria-hidden="true"/>,
        whatsapp: <FaWhatsapp className="h-7 w-7" aria-hidden="true"/>
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    useSolidNavbar
                        ? 'bg-white/95 backdrop-blur-md shadow-md'
                        : 'bg-transparent backdrop-blur-sm'
                }`}
                initial={false}
                aria-label={strings.navbar.ariaLabels.navbar}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="shrink-0">
                            <Link
                                href="/"
                                className={`text-2xl font-bold transition-colors ${
                                    useSolidNavbar
                                        ? 'text-gray-900 hover:text-gray-700'
                                        : 'text-white hover:text-gray-200'
                                }`}
                                aria-label={strings.navbar.ariaLabels.logo}
                            >
                                {useSolidNavbar ? <Image
                                    src="/images/autocheck-logo.png"
                                    alt={strings.navbar.logo}
                                    width={324}
                                    height={91}
                                    className="h-10 w-auto"
                                /> : <Image
                                    src="/images/autocheck-logo-white.png"
                                    alt={strings.navbar.logo}
                                    width={324}
                                    height={91}
                                    className="h-10 w-auto"
                                />}
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link
                                    href="/nosotros"
                                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                                        useSolidNavbar
                                            ? 'text-gray-900 hover:text-gray-700'
                                            : 'text-white hover:text-gray-200'
                                    }`}
                                    aria-label={strings.navbar.ariaLabels.aboutLink}
                                >
                                    {strings.navbar.links.about}
                                </Link>
                                <button
                                    onClick={handlePartnersClick}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                                    aria-label={strings.navbar.ariaLabels.partnersLink}
                                >
                                    {strings.navbar.links.partners}
                                </button>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset transition-colors ${
                                    useSolidNavbar
                                        ? 'text-gray-900 hover:text-gray-700 focus:ring-gray-500'
                                        : 'text-white hover:text-gray-200 focus:ring-white'
                                }`}
                                aria-expanded={isMobileMenuOpen}
                                aria-controls="mobile-sidebar-menu"
                                aria-label={isMobileMenuOpen ? strings.navbar.ariaLabels.mobileMenuClose : strings.navbar.ariaLabels.mobileMenuOpen}
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M6 18L18 6M6 6l12 12"/>
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M4 6h16M4 12h16M4 18h16"/>
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            <div className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }
            `}>
                <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute inset-0 bg-black/40"
                    aria-label={strings.navbar.ariaLabels.mobileMenuClose}
                />

                <aside
                    id="mobile-sidebar-menu"
                    className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] text-gray-100 shadow-2xl transition-transform duration-300 ${
                        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }
                        ${useSolidNavbar ? "bg-gray-950" : "bg-transparent backdrop-blur-sm"}
                    `}
                    aria-label={strings.navbar.ariaLabels.mobileMenuPanel}
                >
                    <div className="h-full pt-20 pb-8 px-6 flex flex-col">
                        <nav className="flex flex-col gap-3" aria-label={strings.navbar.ariaLabels.mobileMenuPanel}>
                            <Link
                                href="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="rounded-md px-4 py-3 text-base font-medium bg-white/5 hover:bg-white/10 transition-colors"
                                aria-label={strings.navbar.ariaLabels.homeLink}
                            >
                                {strings.navbar.links.home}
                            </Link>
                            <Link
                                href="/nosotros"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="rounded-md px-4 py-3 text-base font-medium bg-white/5 hover:bg-white/10 transition-colors"
                                aria-label={strings.navbar.ariaLabels.aboutLink}
                            >
                                {strings.navbar.links.about}
                            </Link>
                            <button
                                type="button"
                                onClick={handlePartnersClick}
                                className="rounded-md px-4 py-3 text-left text-base font-medium bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
                                aria-label={strings.navbar.ariaLabels.partnersLink}
                            >
                                {strings.navbar.links.partners}
                            </button>
                        </nav>

                        <div className="mt-auto pt-6 border-t border-white/10">
                            <p className="text-xs uppercase tracking-wide text-gray-400 mb-4">{strings.footer.social.title}</p>
                            <div className="flex items-center gap-6"
                                 aria-label={strings.navbar.ariaLabels.mobileSocialLinks}>
                                {strings.footer.social.items.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-white transition-colors"
                                        aria-label={`${strings.footer.ariaLabels.socialLink}: ${item.label}`}
                                    >
                                        {socialIcons[item.platform] ?? <span className="text-sm">{item.label}</span>}
                                    </Link>
                                ))}
                            </div>
                            <p className="mt-5 text-xs leading-relaxed text-gray-500">
                                {strings.footer.copyright}
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}
