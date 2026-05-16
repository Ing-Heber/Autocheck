"use client";

import {motion, MotionProps} from "framer-motion";
import {ReactNode} from "react";

interface ButtonProps extends MotionProps {
    children: ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}
export const Button = ({
                           children,
                           variant = "primary",
                           size = "md",
                           className = "",
                           onClick,
                           type = "button",
                           disabled = false,
                           initial,
                           animate,
                           transition,
                           whileHover = {scale: 1.05},
                           whileTap = {scale: 0.95},
                           ...motionProps
                       }: ButtonProps) => {
    const baseClasses = "rounded-lg font-semibold transition-colors cursor-pointer";

    const variantClasses = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-white text-blue-600 hover:bg-gray-50"
    };

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-2 text-base",
        lg: "px-8 py-6 text-lg"
    };

    return (
        <motion.button
            type={type}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            onClick={onClick}
            initial={initial}
            animate={animate}
            transition={transition}
            whileHover={whileHover}
            whileTap={whileTap}
            {...motionProps}
        >
            {children}
        </motion.button>
    );
};
