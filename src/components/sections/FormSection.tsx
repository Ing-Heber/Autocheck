import {motion} from "framer-motion";
import {Button} from "@/components/ui";
import {strings} from "@/content";
import Image from "next/image";

export const FormSection = () => {
    return (
        <section id="contact-form" className="py-20 bg-white overflow-x-hidden" aria-label={strings.form.ariaLabels.formSection}>
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side: Image */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/images/car-cta-md-res.jpg" // Using existing image or placeholder
                            alt={strings.form.imageAlt}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/10 hover:bg-transparent transition-colors duration-300"></div>
                    </motion.div>

                    {/* Right side: Form */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.1}}
                        viewport={{once: true}}
                        className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">{strings.form.sectionTitle}</h2>
                        <p className="text-gray-600 mb-8">{strings.form.sectionDescription}</p>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                        {strings.form.fields.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder={strings.form.fields.placeholder.name}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        aria-label={strings.form.ariaLabels.nameInput}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                        {strings.form.fields.email}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder={strings.form.fields.placeholder.email}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        aria-label={strings.form.ariaLabels.emailInput}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                    {strings.form.fields.phone}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder={strings.form.fields.placeholder.phone}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    aria-label={strings.form.ariaLabels.phoneInput}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                                    {strings.form.fields.message}
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder={strings.form.fields.placeholder.message}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    aria-label={strings.form.ariaLabels.messageInput}
                                ></textarea>
                            </div>

                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full py-4 text-white font-bold"
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                                aria-label={strings.form.ariaLabels.submitButton}
                            >
                                {strings.form.submitButton}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
