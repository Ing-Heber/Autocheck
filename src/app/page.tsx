"use client";

import {
    HeroSection,
    ServicesSection,
    ProductsSection,
    HowItWorksSection,
    TestimonialsSection,
    LocationsSection,
    CTASection,
    FormSection,
    Footer
} from "@/components/sections";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900">
            <HeroSection/>
            <ServicesSection/>
            <ProductsSection/>
            <HowItWorksSection/>
            <TestimonialsSection/>
            <LocationsSection/>
            <CTASection/>
            <FormSection/>
            <Footer/>
        </main>
    );
}
