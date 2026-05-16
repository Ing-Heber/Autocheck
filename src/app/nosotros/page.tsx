"use client"

import {AboutStorySection, CTASection, FormSection, LocationsSection} from "@/components/sections";
import {strings} from "@/content";

export default function NosotrosPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 pt-16">
            <AboutStorySection/>

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

            <section className="bg-white" aria-label={strings.about.ariaLabels.mapIntro}>
                <LocationsSection
                    title={strings.about.mapTitle}
                    subtitle={strings.about.mapDescription}
                />
            </section>
            <FormSection/>
        </main>
    );
}

