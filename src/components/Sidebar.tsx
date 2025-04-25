"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, Briefcase, Layers, Star, Award, Search, Github, Linkedin, FileText, ArrowLeft } from "lucide-react";

const navItems = [
    { href: "/", label: "Home", icon: <Home size={20} /> },
    { href: "/stages", label: "Stages", icon: <Briefcase size={20} /> },
    { href: "/projects", label: "Projects", icon: <Layers size={20} /> },
    { href: "/skills", label: "Skills", icon: <Star size={20} /> },
    { href: "/certifications", label: "Certif", icon: <Award size={20} /> },
    { href: "/research", label: "Research", icon: <Search size={20} /> },
];

const socialLinks = [
    { href: "https://github.com/ton-github", label: "GitHub", icon: <Github size={20} /> },
    { href: "https://linkedin.com/in/ton-linkedin", label: "LinkedIn", icon: <Linkedin size={20} /> },
    { href: "/cv.pdf", label: "CV", icon: <FileText size={20} /> },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    // Vérifie si l'on est sur une sous-page (ex: /stages/1, /projects/app)
    const isSubPage = pathname.split("/").length > 2;

    return (
        <aside className="text-white h-screen w-40 fixed left-0 top-0 flex flex-col py-6 px-3 border-r border-stone-500 bg-stone-900">
            {/* Affichage conditionnel : Portfolio ou Retour */}
            {isSubPage ? (
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-3 px-3 py-2 mb-4 rounded transition-all duration-200 ease-in-out 
                    text-sm font-medium bg-stone-700 text-white hover:bg-stone-600"
                >
                    <ArrowLeft size={20} /> Retour
                </button>
            ) : (
                <h1 className="text-lg font-bold mb-6 text-center">Portfolio</h1>
            )}

            <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                    const isActive = item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href) && item.href !== "/";

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2 rounded transition-all duration-200 ease-in-out text-sm font-medium 
        ${isActive ? "bg-stone-600" : "hover:bg-stone-500"}`}
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Section des liens sociaux en bas */}
            <div className="mt-auto pt-6 border-t border-stone-500">
                {socialLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-2 rounded transition-all duration-200 ease-in-out text-sm font-medium hover:bg-stone-500"
                    >
                        {link.icon}
                        {link.label}
                    </Link>
                ))}
            </div>
        </aside>
    );
}
