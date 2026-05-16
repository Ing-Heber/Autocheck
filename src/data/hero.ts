import type {HeroSlide} from "@/components/shared/types";
import {strings} from "@/content";

export const hero: HeroSlide[] = [
    {
        imageUrl: "/images/hero-image-md-res.jpg",
        title: strings.hero.firstImage.title,
        titleHighlight: "",
        description: strings.hero.firstImage.description,
        ctaButton: strings.hero.firstImage.ctaButton,
        url: "#contact-form",
        ariaLabels: strings.hero.firstImage.ariaLabels,
        styles: {
            backgroundPosition: "60% center",
            contentClassName: "mt-80 max-w-3xl items-start text-left xl:mt-10 xl:max-w-6xl",
            titleClassName: "text-4xl md:text-5xl xl:text-7xl",
            descriptionClassName: "max-w-2xl",
            ctaClassName: "self-start"
        }
    },
    {
        imageUrl: "/images/total-energies-hero.png",
        title: strings.hero.secondImage.title,
        titleHighlight: "",
        description: strings.hero.secondImage.description,
        ctaButton: strings.hero.secondImage.ctaButton,
        url: "#contact-form",
        ariaLabels: strings.hero.secondImage.ariaLabels,
        styles: {
            backgroundPosition: "center",
            backgroundSize: "cover",
            contentClassName: "max-w-6xl items-end text-right mt-40 mb-auto sm:mb-0 sm:mt-0 xl:mb-10",
            titleClassName: "text-3xl sm:text-4xl lg:text-7xl whitespace-pre-line",
            descriptionClassName: "max-w-2xl",
            ctaClassName: "self-end"
        }
    },
    {
        imageUrl: "/images/rack-with-filters.png",
        title: strings.hero.thirdImage.title,
        titleHighlight: "",
        description: strings.hero.thirdImage.description,
        ctaButton: strings.hero.thirdImage.ctaButton,
        url: "/partners",
        ariaLabels: strings.hero.thirdImage.ariaLabels,
        styles: {
            backgroundPosition: "center",
            backgroundSize: "cover",
            contentClassName: "max-w-6xl items-start text-left",
            descriptionClassName: "max-w-2xl",
            ctaClassName: "self-start",
            titleClassName: "text-3xl sm:text-4xl lg:text-7xl whitespace-pre-line",
            sectionClassName: "bg-gradient-to-b from-black/60 via-black/30 to-transparent"
        }
    }
];
