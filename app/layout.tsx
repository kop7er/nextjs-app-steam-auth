import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next.js + Steam Auth",
    description: "Next.js App router with Steam auth"
}

type LayoutProps = { children: React.ReactNode }

export default function RootLayout({ children }: LayoutProps) {

    return (
        <html lang="en">
            <body className="flex justify-center items-center min-h-screen bg-neutral-700 text-white">
                <div className="bg-zinc-900 p-8 rounded-xl">
                    {children}
                </div>
            </body>
        </html>
    )

}
