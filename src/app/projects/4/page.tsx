import { Github } from "lucide-react";

export default function TPGitHub() {
    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-extrabold text-white">TP GitHub</h1>
                        <a
                            href="https://github.com/DCodeProg/Argali"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 mt-4 text-stone-300 hover:text-white transition duration-200"
                        >
                            <Github size={28} />
                            <span className="text-lg font-medium">Voir sur GitHub</span>
                        </a>
                        <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                            TP de mise en place d’une présentation en ligne avec <span className="font-bold">GitHub Pages</span>, permettant de rendre
                            accessible un CV ou une présentation personnelle de manière professionnelle.
                        </p>
                    </div>
                </section>

                {/* Technologies utilisées */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Technologies utilisées</h2>
                    <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
                        <li>GitHub.io (hébergement du portfolio et CV en ligne)</li>
                        <li>HTML & CSS (personnalisation du design et du contenu)</li>
                    </ul>
                </section>

                {/* Compétences acquises */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Compétences acquises</h2>

                    <div className="text-stone-300 mt-3 space-y-4 text-lg">
                        {/* Organiser son développement professionnel */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Organiser son développement professionnel</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Création d’une présence en ligne avec <span className="font-bold">GitHub Pages</span>.</li>
                                <li>Renforcement de la visibilité en ligne pour les recruteurs et partenaires professionnels.</li>
                                <li>Mise en avant des compétences techniques grâce à <span className="font-bold">GitHub</span>.</li>
                                <li>Apprentissage des bonnes pratiques en HTML/CSS pour un portfolio efficace.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
