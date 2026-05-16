import React from "react";

export interface HeroSlide {
    imageUrl: string;
    title: string;
    titleHighlight?: string;
    description: string;
    ctaButton: string;
    url?: string;
    ariaLabels: {
        heroSection: string;
        ctaButton: string;
    };
    styles?: {
        sectionClassName?: string;
        overlayClassName?: string;
        contentClassName?: string;
        titleClassName?: string;
        descriptionClassName?: string;
        ctaClassName?: string;
        backgroundPosition?: React.CSSProperties["backgroundPosition"];
        backgroundSize?: React.CSSProperties["backgroundSize"];
    };
}

export interface Service {
    title: string;
    description: string;
    icon: string;
}

export interface Product {
    name: string;
    type: string;
    price: string;
    image?: {
        url?: string;
        alt?: string;
    };
}

export interface Testimonial {
    name: string;
    quote: string;
}

export interface Location {
    name: string;
    address: string;
    schedule: string;
    phones: string[];
    socialMedia: {
        facebook?: string;
        googleMaps?: string;
        whatsapp?: string;
    };
}

export type LocationOffice = Omit<Location, "name">;

export interface LocationGroup {
    label: string;
    offices: LocationOffice[];
}

export type LocationsByName = Record<string, LocationGroup>;

