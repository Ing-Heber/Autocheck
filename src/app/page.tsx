"use client";

import {
    HeroSection,
    ServicesSection,
    HowItWorksSection,
    TestimonialsSection,
    LocationsSection,
    CTASection,
    FormSection,
} from "@/components/sections";
import {strings} from "@/content";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900">
            <HeroSection/>
            <ServicesSection/>
            <CTASection
                id="partners-cta"
                background={{color: "#1E3A8A"}}
                content={{
                    title: strings.homePartnersCta.title,
                    description: strings.homePartnersCta.description,
                    buttonLabel: strings.homePartnersCta.button,
                    ariaLabels: strings.homePartnersCta.ariaLabels
                }}
                action={{type: "route", href: "/partners"}}
            />
            <HowItWorksSection/>
            <TestimonialsSection/>
            <LocationsSection title={strings.locations.sectionTitle} />
            <CTASection background={{imageUrl: "/images/car-garage-cta-bg.jpg"}}/>
            <FormSection/>
        </main>
    );
}
