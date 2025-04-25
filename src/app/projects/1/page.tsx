import { Github } from "lucide-react";

export default function TPArgali() {
    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-extrabold text-white">TP rentrée n°1 - Argali</h1>
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
                            Ce projet vise à <span className="font-bold">sensibiliser et rendre accessible les informations sur l’écologie</span>.
                            Le nom <span className="font-bold">Argali</span> a été choisi car c'est un animal en voie de disparition.
                            Projet réalisé avec <span className="font-bold">Kivy</span>.
                        </p>
                    </div>

                </section>
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Technologies utilisées</h2>
                    <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
                        <li>Kivy</li>
                        <li>GitHub</li>
                        <li>Trello</li>
                    </ul>
                </section>
                {/* Compétences acquises */}
                {/* Validation des compétences */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Compétences acquises</h2>

                    <div className="text-stone-300 mt-3 space-y-4 text-lg">
                        {/* Travailler en mode projet */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Travailler en mode projet</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li><span className="font-bold">GitHub</span> pour un travail collaboratif structuré avec commits et branches.</li>
                                <li><span className="font-bold">Trello</span> pour suivre l’avancement des tâches et gérer les priorités.</li>
                            </ul>
                        </div>

                        {/* Développement et montée en compétences */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Développement et montée en compétences</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Approfondissement des connaissances en <span className="font-bold">GitHub</span> et <span className="font-bold">Trello</span> grâce à la mise en pratique.</li>
                                <li>Apprentissage de <span className="font-bold">Kivy</span> pour le développement d’interfaces interactives.</li>
                            </ul>
                        </div>

                        {/* Gestion du patrimoine informatique */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Gestion du patrimoine informatique</h3>
                            <li>Maîtrise de <span className="font-bold">GitHub</span> et <span className="font-bold">Trello</span> pour une organisation efficace du projet.</li>
                        </div>
                    </div>
                </section>


                {/* Image du projet */}
                <section className="w-full text-center">
                    <img
                        alt="Code Argali"
                        src="img/codeArgali.jpg"
                        className="rounded-lg shadow-lg w-full max-w-2xl mx-auto mt-6"
                    />
                </section>

            </div>
        </main>
    );
}
