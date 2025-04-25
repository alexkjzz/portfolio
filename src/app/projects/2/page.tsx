import { Github } from "lucide-react";

export default function TPEpsistem() {
    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-extrabold text-white">TP rentrée n°2 - EPSI:STEM</h1>
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
                            EPSI:STEM est une application mobile développée avec <span className="font-bold">Unity</span>, 
                            destinée aux salons étudiants et journées portes ouvertes. Son objectif est de proposer 
                            une expérience interactive et ludique pour mieux découvrir l’école.
                        </p>
                    </div>
                </section>

                {/* Technologies utilisées */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Technologies utilisées</h2>
                    <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
                        <li>Unity (développement de l’application mobile interactive)</li>
                        <li>GitHub (gestion du projet en mode collaboratif)</li>
                        <li>Trello (suivi des tâches et avancement du projet)</li>
                        <li>C# (langage utilisé pour le développement des fonctionnalités)</li>
                    </ul>
                </section>

                {/* Validation des compétences */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Compétences acquises</h2>

                    <div className="text-stone-300 mt-3 space-y-4 text-lg">
                        {/* Travailler en mode projet */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Travailler en mode projet</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Gestion de projet avec <span className="font-bold">GitHub</span> et <span className="font-bold">Trello</span>.</li>
                                <li>Organisation des tâches et suivi de l’avancement du projet.</li>
                            </ul>
                        </div>

                        {/* Développement et montée en compétences */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Développement et montée en compétences</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Apprentissage du développement sous <span className="font-bold">Unity</span>.</li>
                                <li>Approfondissement des connaissances en <span className="font-bold">C#</span>.</li>
                                <li>Expérience avec la création d’interfaces interactives et de mini-jeux.</li>
                            </ul>
                        </div>

                        {/* Mise à disposition d’un service informatique */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Mettre à disposition un service informatique</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Développement d’une application mobile pédagogique.</li>
                                <li>Tests utilisateur pour optimiser l’ergonomie et l’expérience.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Image du projet */}
                <section className="w-full text-center">
                    <img
                        alt="Interface EPSI:STEM"
                        src="img/jeuxEpsistem.jpg"
                        className="rounded-lg shadow-lg w-full max-w-2xl mx-auto mt-6"
                    />
                </section>

            </div>
        </main>
    );
}
