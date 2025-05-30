import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Alexis LAMONNIER",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} bg-stone-600 text-white`}>
        <Sidebar />
        <Header />
        <main className="ml-40 mt-19 p-8 pb-16 flex-1 min-h-screen bg-stone-600">
          {children}
        </main>

      </body>
    </html>
  );
}
