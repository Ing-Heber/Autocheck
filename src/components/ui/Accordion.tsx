"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItem {
    id: string | number;
    title: string;
    content: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
    defaultOpenId?: string | number;
}

export const Accordion = ({ items, defaultOpenId }: AccordionProps) => {
    const [openId, setOpenId] = useState<string | number | null>(defaultOpenId || null);

    const toggle = (id: string | number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="space-y-4 w-full">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="border border-gray-100 rounded-xl overflow-hidden bg-gray-50 shadow-sm"
                >
                    <button
                        onClick={() => toggle(item.id)}
                        className="cursor-pointer w-full flex items-center justify-between p-4 text-left font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
                        aria-expanded={openId === item.id}
                    >
                        <span>{item.title}</span>
                        <motion.span
                            animate={{ rotate: openId === item.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaChevronDown aria-hidden="true" />
                        </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                        {openId === item.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="p-4 pt-0 text-gray-600 border-t border-gray-100">
                                    {item.content}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};
