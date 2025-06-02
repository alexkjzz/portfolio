import { Github } from "lucide-react";

export default function ProjetBrasserieMobile() {
    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6">
                    <h1 className="text-4xl font-extrabold text-white">Projet Brasserie Terroir & Savoirs - Mobile</h1>

                    {/* Bouton GitHub sous le h1 */}
                    <a
                        href="https://github.com/alexkjzz/brasserie/tree/main/mobile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 mt-4 text-stone-300 hover:text-white transition duration-200"
                    >
                        <Github size={28} />
                        <span className="text-lg font-medium">Voir sur GitHub</span>
                    </a>

                    <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                        Cette application mobile développée en <span className="font-bold">Flutter</span> permet aux utilisateurs de <span className="font-bold">passer des commandes de produits</span>, gérer leurs réservations et modifier leurs informations de compte. L’application communique avec une <span className="font-bold">API</span> qui assure l’interaction avec une <span className="font-bold">base de données MySQL</span>.
                    </p>
                </section>

                {/* Technologies utilisées */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Technologies utilisées</h2>
                    <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
                        <li><span className="font-bold">Flutter</span> (Dart) – Développement mobile</li>
                        <li><span className="font-bold">Symfony</span> (PHP) – API backend</li>
                        <li><span className="font-bold">MySQL</span> – Gestion des données</li>
                        <li><span className="font-bold">Postman</span> – Tests API</li>
                        <li><span className="font-bold">GitHub</span> – Gestion du versionning</li>
                    </ul>
                </section>

                {/* Compétences acquises */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Compétences acquises</h2>

                    <div className="text-stone-300 mt-3 space-y-4 text-lg">
                        <div>
                            <h3 className="text-xl font-semibold text-white">Répondre aux incidents et aux demandes d'assistance et d'évolution</h3>
                            <p>Suivi des retours utilisateurs et correction des bugs via <span className="font-bold">GitHub</span>.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Mettre à disposition des utilisateurs un service informatique</h3>
                            <p>Déploiement et configuration d’une <span className="font-bold">application mobile fonctionnelle</span>, connectée à une base de données.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Développer la présence en ligne de l'organisation</h3>
                            <p>Création d’une <span className="font-bold">application mobile intuitive</span> pour permettre aux clients de commander facilement.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Organiser son développement professionnel</h3>
                            <p>Utilisation de <span className="font-bold">Flutter</span>, avec intégration de bonnes pratiques de développement et veille technologique continue.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Gérer le patrimoine informatique</h3>
                            <p>Gestion et stockage des données dans <span className="font-bold">MySQL</span>, tout en garantissant une communication optimale avec l’API.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Travailler en mode projet</h3>
                            <p>Gestion du projet via <span className="font-bold">GitHub</span>, planification des tâches et validation des API avec <span className="font-bold">Postman</span>.</p>
                        </div>
                    </div>
                </section>

                {/* Contexte du projet */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Contexte du projet</h2>
                    <p className="text-stone-300 mt-3 text-lg max-w-3xl text-center">
                        Le contexte détaillé du projet a été formalisé et est <span className="font-bold">disponible en téléchargement</span>. Il inclut toutes les informations clés sur les objectifs, les méthodes et les choix techniques.
                    </p>

                    {/* Bouton de téléchargement */}
                    <a
                        href="/context_brasserie_mobile.pdf"
                        download
                        className="mt-4 bg-stone-600 text-white py-2 px-4 rounded-lg hover:bg-stone-700 transition duration-200 self-center text-lg"
                    >
                        Télécharger le contexte du projet
                    </a>
                </section>

            </div>
        </main>
    );
}
