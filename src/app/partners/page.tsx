"use client";

import Image from "next/image";
import {useState} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {strings} from "@/content";
import {FormSection} from "@/components/sections";

const partnerLogoMap: Record<string, string> = {
    TotalEnergies: "/images/partners/TotalEnergies-logo.svg",
    Bosch: "/images/partners/Bosch-logo.svg",
    "WIX Filters": "/images/partners/wix-filters-logo.png",
    Loctite: "/images/partners/Loctite-logo.svg",
    Motul: "/images/partners/Motul-logo.svg",
    "MANN FILTER": "/images/partners/Mann-filter-logo.svg",
    DENSO: "/images/partners/Denso-logo.svg",
    Raloy: "/images/partners/raloy-logo.png",
    Purolator: "/images/partners/Purolator-logo.svg"
};

type PartnerDetail = (typeof strings.partners.details)[number];

export default function PartnersPage() {
    const [selectedPartner, setSelectedPartner] = useState<PartnerDetail | null>(null);

    return (
        <main className="min-h-screen bg-slate-50 text-gray-900 pt-16"
              aria-label={strings.partners.ariaLabels.pageMain}>
            <section className="w-full py-20 sm:py-24" aria-label={strings.partners.ariaLabels.section}>
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <header className="mx-auto max-w-3xl text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {strings.partners.title}
                        </h1>
                        <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                            {strings.partners.subtitle}
                        </p>
                    </header>

                    <div
                        className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5"
                        aria-label={strings.partners.ariaLabels.logosGrid}
                    >
                        {strings.partners.details.map((partner) => (
                            <article
                                key={partner.trademark}
                                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
                            >
                                <button
                                    type="button"
                                    onClick={() => setSelectedPartner(partner)}
                                    className="group flex h-full w-full flex-col text-left cursor-pointer"
                                    aria-label={`${strings.partners.ariaLabels.detailButton}: ${partner.trademark}`}
                                >
                                    <div className="flex h-16 items-center justify-center">
                                        <Image
                                            src={partnerLogoMap[partner.trademark]}
                                            alt={`${strings.partners.logoAltPrefix} ${partner.trademark}`}
                                            width={220}
                                            height={80}
                                            className="h-12 w-auto max-w-full object-contain grayscale transition duration-300 group-hover:scale-105 group-hover:grayscale-0 group-active:scale-105 group-active:grayscale-0"
                                        />
                                    </div>
                                    <span className="mt-4 text-center text-xs font-semibold text-blue-700">
                                        {strings.partners.modal.trigger}
                                    </span>
                                </button>
                            </article>
                        ))}
                    </div>

                    <Dialog.Root open={Boolean(selectedPartner)}
                                 onOpenChange={(open) => !open && setSelectedPartner(null)}>
                        <Dialog.Portal>
                            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60"/>
                            <Dialog.Content
                                className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl focus:outline-none"
                                aria-label={strings.partners.ariaLabels.detailModal}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <Dialog.Title className="text-xl font-bold text-gray-900">
                                        {selectedPartner && (
                                            <Image
                                                src={partnerLogoMap[selectedPartner.trademark]}
                                                alt={`${strings.partners.logoAltPrefix} ${selectedPartner.trademark}`}
                                                width={220}
                                                height={80}
                                                className="h-10 w-auto object-contain"
                                            />
                                        )}
                                    </Dialog.Title>
                                    <Dialog.Close
                                        className="cursor-pointer rounded-md px-3 py-1.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                                        aria-label={strings.partners.ariaLabels.closeModal}
                                    >
                                        {strings.partners.modal.close}
                                    </Dialog.Close>
                                </div>

                                <Dialog.Description className="mt-4 text-sm leading-relaxed text-gray-700">
                                    {selectedPartner?.description}
                                </Dialog.Description>

                                <div className="mt-5 rounded-xl bg-blue-50 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                                        {strings.partners.modal.benefitLabel}
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-blue-900">
                                        {selectedPartner?.benefit}
                                    </p>
                                </div>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>

                    <FormSection/>
                </div>
            </section>
        </main>
    );
}

