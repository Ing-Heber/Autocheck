"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import {locations} from "@/data/locations";
import {strings} from "@/content/strings";
import {fadeInUp} from "@/components/shared/animations";
import {Button} from "@/components/ui";
import {Accordion} from "@/components/ui";
import {FaFacebookF, FaMapMarkerAlt, FaWhatsapp, FaLink} from "react-icons/fa";

interface LocationsSectionProps {
    title?: string;
    subtitle?: string;
}

export const LocationsSection = ({ title, subtitle }: LocationsSectionProps) => {
    const [selectedLocation, setSelectedLocation] = useState(locations[0]);
    const [mapError, setMapError] = useState(false);

    const getSocialMediaIcon = (platform: string) => {
        switch (platform) {
            case 'facebook':
                return <FaFacebookF aria-hidden="true" />;
            case 'whatsapp':
                return <FaWhatsapp aria-hidden="true" />;
            default:
                return <FaLink aria-hidden="true" />;
        }
    };

    const handleSocialMediaClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const accordionItems = locations.map((location, index) => ({
        id: index,
        title: location.name,
        content: (
            <div className="space-y-4">
                <div className="space-y-3 text-sm">
                    <div>
                        <h4 className="font-medium text-gray-700 mb-1">
                            {strings.locations.addressLabel}
                        </h4>
                        <p className="text-gray-600">{location.address}</p>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-700 mb-1">
                            {strings.locations.scheduleLabel}
                        </h4>
                        <p className="text-gray-600 whitespace-pre-line">{location.schedule}</p>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-700 mb-1">
                            {strings.locations.phonesLabel}
                        </h4>
                        <div className="space-y-1">
                            {location.phones.map((phone, phoneIndex) => (
                                <p key={phoneIndex} className="text-blue-600 font-medium">
                                    {phone}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-700 mb-2">
                            {strings.locations.socialMediaLabel}
                        </h4>
                        <div className="flex space-x-3">
                            {location.socialMedia.facebook && (
                                <motion.button
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.95}}
                                    className="cursor-pointer w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg hover:bg-blue-700 transition-colors"
                                    onClick={() => handleSocialMediaClick(location.socialMedia.facebook!)}
                                    aria-label={strings.locations.ariaLabels.facebookButton}
                                >
                                    {getSocialMediaIcon('facebook')}
                                </motion.button>
                            )}
                            {location.socialMedia.whatsapp && (
                                <motion.button
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.95}}
                                    className="cursor-pointer w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-lg hover:bg-green-700 transition-colors"
                                    onClick={() => handleSocialMediaClick(location.socialMedia.whatsapp!)}
                                    aria-label={strings.locations.ariaLabels.whatsappButton}
                                >
                                    {getSocialMediaIcon('whatsapp')}
                                </motion.button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex gap-3">
                    <Button
                        size="md"
                        className="flex-1"
                        onClick={() => window.open(`tel:${location.phones[0].replace(/[^\d]/g, '')}`)}
                        aria-label={strings.locations.ariaLabels.callButton}
                    >
                        {strings.locations.callButton}
                    </Button>
                    <Button
                        variant="secondary"
                        size="md"
                        className="flex-1"
                        onClick={() => {
                            setSelectedLocation(location);
                            setMapError(false);
                            document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        {strings.locations.visitButton}
                    </Button>
                </div>
            </div>
        )
    }));

    return (
        <section
            id="locations"
            className="py-20 bg-white"
            aria-label={strings.locations.ariaLabels.locationsSection}
        >
            <div className="max-w-6xl mx-auto px-6">
                {title && (
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="text-center mb-12"
                    >
                        <motion.h2
                            {...fadeInUp}
                            className="text-3xl font-semibold mb-3"
                        >
                            {title}
                        </motion.h2>
                        {subtitle && (
                            <p className="text-gray-600">{subtitle}</p>
                        )}
                    </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Google Maps Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg bg-gray-200"
                    >
                        {selectedLocation.socialMedia.googleMaps && !mapError ? (
                            <iframe
                                src={selectedLocation.socialMedia.googleMaps}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Mapa de ${selectedLocation.name}`}
                                onError={() => setMapError(true)}
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 p-8 text-center">
                                <span className="text-5xl mb-4">📍</span>
                                <p className="text-lg font-medium">
                                    {strings.common.error}
                                </p>
                                <p className="text-sm">
                                    No se pudo cargar el mapa para esta ubicación.
                                </p>
                            </div>
                        )}
                    </motion.div>

                    {/* Accordion Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Accordion items={accordionItems} defaultOpenId={0} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
