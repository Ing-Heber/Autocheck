"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui";
import { strings } from "@/content";
import { contactSchema, ContactFormData } from "@/data/contactSchema";
import Image from "next/image";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export const FormSection = () => {
    const [status, setStatus] = useState<SubmitStatus>("idle");
    const [serverError, setServerError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setStatus("loading");
        setServerError(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const json = await res.json().catch(() => ({}));
                setServerError(json.error ?? strings.form.errorMessage);
                setStatus("error");
                return;
            }

            setStatus("success");
            reset();
        } catch {
            setServerError(strings.form.errorMessage);
            setStatus("error");
        }
    };

    const inputBase =
        "w-full px-4 py-3 rounded-lg border outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent";
    const inputNormal = `${inputBase} border-gray-300`;
    const inputError  = `${inputBase} border-red-400 bg-red-50 focus:ring-red-400`;

    return (
        <section
            id="contact-form"
            className="py-20 bg-white overflow-x-hidden"
            aria-label={strings.form.ariaLabels.formSection}
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side: Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/images/car-cta-md-res.jpg"
                            alt={strings.form.imageAlt}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/10 hover:bg-transparent transition-colors duration-300" />
                    </motion.div>

                    {/* Right side: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">
                            {strings.form.sectionTitle}
                        </h2>
                        <p className="text-gray-600 mb-8">{strings.form.sectionDescription}</p>

                        {/* Success Banner */}
                        <AnimatePresence>
                            {status === "success" && (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-green-800 text-sm font-medium"
                                    role="alert"
                                >
                                    <span className="text-lg">✅</span>
                                    {strings.form.successMessage}
                                </motion.div>
                            )}

                            {status === "error" && serverError && (
                                <motion.div
                                    key="error"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mb-6 flex items-center gap-3 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-red-800 text-sm font-medium"
                                    role="alert"
                                >
                                    <span className="text-lg">⚠️</span>
                                    {serverError}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form
                            className="space-y-6"
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="space-y-1">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                        {strings.form.fields.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder={strings.form.fields.placeholder.name}
                                        className={errors.name ? inputError : inputNormal}
                                        aria-label={strings.form.ariaLabels.nameInput}
                                        aria-invalid={!!errors.name}
                                        {...register("name")}
                                    />
                                    {errors.name && (
                                        <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="space-y-1">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                        {strings.form.fields.email}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder={strings.form.fields.placeholder.email}
                                        className={errors.email ? inputError : inputNormal}
                                        aria-label={strings.form.ariaLabels.emailInput}
                                        aria-invalid={!!errors.email}
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="space-y-1">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                    {strings.form.fields.phone}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder={strings.form.fields.placeholder.phone}
                                    className={errors.phone ? inputError : inputNormal}
                                    aria-label={strings.form.ariaLabels.phoneInput}
                                    aria-invalid={!!errors.phone}
                                    {...register("phone")}
                                />
                                {errors.phone && (
                                    <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div className="space-y-1">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                                    {strings.form.fields.message}
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder={strings.form.fields.placeholder.message}
                                    className={errors.message ? inputError : inputNormal}
                                    aria-label={strings.form.ariaLabels.messageInput}
                                    aria-invalid={!!errors.message}
                                    {...register("message")}
                                />
                                {errors.message && (
                                    <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="w-full py-4 text-white font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                                whileHover={status === "loading" ? {} : { scale: 1.02 }}
                                whileTap={status === "loading" ? {} : { scale: 0.98 }}
                                aria-label={strings.form.ariaLabels.submitButton}
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? strings.form.submitting : strings.form.submitButton}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
