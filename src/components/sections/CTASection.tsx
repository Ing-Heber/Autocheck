"use client";

import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui";
import {strings} from "@/content";

type CTAContent = {
    title: string;
    description: string;
    buttonLabel: string;
    ariaLabels: {
        section: string;
        button: string;
    };
};

type CTAAction =
    | {
        type: "scroll";
        targetId: string;
    }
    | {
        type: "route";
        href: string;
    };

type CTASectionProps = {
    id?: string;
    background?: {
        imageUrl?: string;
        color?: string;
    };
    content?: CTAContent;
    action?: CTAAction;
};

const defaultBackground = {
    imageUrl: "/images/car-cta-md-res.jpg"
};

const defaultContent: CTAContent = {
    title: strings.cta.title,
    description: strings.cta.description,
    buttonLabel: strings.cta.ctaButton,
    ariaLabels: {
        section: strings.cta.ariaLabels.ctaSection,
        button: strings.cta.ariaLabels.ctaButton
    }
};

const defaultAction: CTAAction = {
    type: "scroll",
    targetId: "contact-form"
};

export const CTASection = ({
    id = "cta",
    background = defaultBackground,
    content = defaultContent,
    action = defaultAction
}: CTASectionProps) => {
    const router = useRouter();
    const hasImageBackground = Boolean(background.imageUrl);

    const handleClick = () => {
        if (action.type === "route") {
            router.push(action.href);
            return;
        }

        document.getElementById(action.targetId)?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <motion.section
            id={id}
            className={`relative py-36 text-white text-center ${
                hasImageBackground ? "bg-cover bg-center bg-no-repeat" : ""
            }`}
            style={
                hasImageBackground
                    ? {backgroundImage: `url('${background.imageUrl}')`}
                    : {backgroundColor: background.color ?? "#2563EB"}
            }
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true, margin: "-100px"}}
            aria-label={content.ariaLabels.section}
        >
            {/* Background overlay */}
            {hasImageBackground ? <div className="absolute inset-0 bg-black/50"></div> : null}

            <div className="relative z-10">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="text-3xl font-semibold mb-6"
                >
                    {content.title}
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.4}}
                    className="mb-8 text-blue-100 whitespace-pre-line"
                >
                    {content.description}
                </motion.p>
                <Button
                    variant="secondary"
                    size="lg"
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5, delay: 0.6}}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        transition: {duration: 0.2}
                    }}
                    onClick={handleClick}
                    aria-label={content.ariaLabels.button}
                >
                    {content.buttonLabel}
                </Button>
            </div>
        </motion.section>
    );
};
