import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["200", "400", "600", "800"],
    variable: "--font-montserrat"
})

export const metadata: Metadata = {
    title: "Autocheck",
    description: "Lo mejor para tu auto en lubricantes y filtros",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${montserrat.variable} antialiased`}
        >
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
