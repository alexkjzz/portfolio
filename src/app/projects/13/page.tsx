import { Github } from "lucide-react";

export default function ProjetBonsai() {
    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6">
                    <h1 className="text-4xl font-extrabold text-white">Bonsai Coach Académie</h1>

                    <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                        Dans le cadre d’un cours de <span className="font-bold">maintenance applicative</span>, 
                        nous avons repris un projet existant afin d’y apporter diverses modifications : 
                        branchement du frontend au backend, ajout de fonctionnalités comme le multi-upload, 
                        gestion des fichiers utilisateurs, ou encore mise en place de règles d’accès.
                    </p>
                </section>

                {/* Technologies utilisées */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Technologies utilisées</h2>
                    <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
                        <li>Supabase (backend, authentification, stockage)</li>
                        <li>React (interface utilisateur)</li>
                        <li>GitHub (gestion de versions)</li>
                        <li>JavaScript / TypeScript</li>
                    </ul>
                </section>

                {/* Compétences acquises */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Compétences acquises</h2>

                    <div className="text-stone-300 mt-3 space-y-4 text-lg">
                        {/* Gérer le patrimoine informatique */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Gérer le patrimoine informatique</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Création d’un modèle conceptuel de données.</li>
                                <li>Recensement des dépendances fonctionnelles.</li>
                                <li>Inventaire des données et des règles de calcul.</li>
                            </ul>
                        </div>

                        {/* Travailler en mode projet */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Travailler en mode projet</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Refactorisation d’un projet existant selon un cahier des charges.</li>
                                <li>Utilisation de GitHub pour le suivi collaboratif.</li>
                                <li>Prise en compte des users stories dans les développements.</li>
                            </ul>
                        </div>

                        {/* Organiser son développement professionnel */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Organiser son développement professionnel</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Approfondissement de mes compétences sur <span className="font-bold">Supabase</span>.</li>
                                <li>Apprentissage autonome via la documentation officielle et des tutoriels en ligne.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                                <section className="w-full flex flex-col items-center gap-6">
                    {/* Conteneur des images disposées verticalement */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-col items-center">
                            <img
                                alt="MLD"
                                src="/MLD-bonsai.png"
                                className="rounded-lg w-[700px] shadow-lg h-auto"
                            />
                            <p className="text-stone-400 text-sm mt-2">MLD</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                alt="supabase"
                                src="/supabase-bonsai.png"
                                className="rounded-lg shadow-lg w-[700px] h-auto"
                            />
                            <p className="text-stone-400 text-sm mt-2">Supabase</p>
                        </div>

                    </div>
                </section>

            </div>
        </main>
    );
}
