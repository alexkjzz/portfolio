import { Github } from "lucide-react";

export default function ProjetChasseExpo() {
    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6">
                    <h1 className="text-4xl font-extrabold text-white">Projet Chasse Expo</h1>

                    {/* Bouton GitHub sous le h1 */}
                    <a
                        href="https://github.com/ton-projet-chasseexpo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 mt-4 text-stone-300 hover:text-white transition duration-200"
                    >
                        <Github size={28} />
                        <span className="text-lg font-medium">Voir sur GitHub</span>
                    </a>

                    <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                        Ce projet nous a challengés à <span className="font-bold">concevoir une application mobile</span> en seulement <span className="font-bold">4 heures</span>, intégrant l’accès à la <span className="font-bold">caméra</span> et un <span className="font-bold">formulaire d’envoi de message</span>. Nous avons utilisé <span className="font-bold">Firebase</span> pour stocker les informations et gérer les photos capturées.
                    </p>
                </section>

                {/* Technologies utilisées */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Technologies utilisées</h2>
                    <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
                        <li><span className="font-bold">React Native</span> (développement de l’application mobile)</li>
                        <li><span className="font-bold">Firebase</span> (stockage des données et gestion des photos)</li>
                        <li><span className="font-bold">GitHub</span> (gestion du versionning)</li>
                        <li><span className="font-bold">Play Store</span> (déploiement en test pour installation)</li>
                    </ul>
                </section>

                {/* Compétences acquises */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Compétences acquises</h2>

                    <div className="text-stone-300 mt-3 space-y-4 text-lg">
                        {/* Travailler en mode projet */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Travailler en mode projet</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Utilisation de <span className="font-bold">GitHub</span> pour le versionning et la gestion collaborative.</li>
                                <li>Développement rapide et structuré d’une application mobile fonctionnelle.</li>
                            </ul>
                        </div>

                        {/* Mettre à disposition des utilisateurs un service informatique */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Mettre à disposition des utilisateurs un service informatique</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Exportation et publication sur le <span className="font-bold">Play Store</span> en test.</li>
                                <li>Installation de l’application sur le téléphone du professeur pour lancer la <span className="font-bold">chasse au trésor</span>.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="w-full flex flex-col items-center gap-6">
                    {/* Conteneur des images disposées verticalement */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-col items-center">
                            <img
                                alt="chasse_expo"
                                src="/chasse_expo.png"
                                className="rounded-lg w-[700px] shadow-lg h-auto"
                            />
                            <p className="text-stone-400 text-sm mt-2">Chasse Expo</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                alt="playstore"
                                src="/playstore_chasse_expo.png"
                                className="rounded-lg shadow-lg w-[700px] h-auto"
                            />
                            <p className="text-stone-400 text-sm mt-2">Playstore ChasseExpo</p>
                        </div>

                    </div>
                </section>

            </div>
        </main>
    );
}
