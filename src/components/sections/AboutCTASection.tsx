"use client";

import {motion} from "framer-motion";
import {strings} from "@/content";
import {Button} from "@/components/ui";

export const AboutCTASection = () => {
    const scrollToForm = () => {
        document.getElementById("contact-form")?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <motion.section
            id="cta"
            className="py-20 bg-blue-600 text-white text-center"
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}
            viewport={{once: true}}
            aria-label={strings.about.ariaLabels.ctaSection}
        >
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-4">{strings.about.ctaTitle}</h2>
                <p className="text-blue-100 mb-8">{strings.about.ctaDescription}</p>
                <Button
                    variant="secondary"
                    size="lg"
                    onClick={scrollToForm}
                    aria-label={strings.about.ariaLabels.ctaButton}
                >
                    {strings.about.ctaButton}
                </Button>
            </div>
        </motion.section>
    );
};

