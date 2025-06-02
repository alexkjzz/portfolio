import { Github } from "lucide-react";

export default function ProjetBrasserie() {
    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6">
                    <h1 className="text-4xl font-extrabold text-white">Projet Brasserie Terroir & Savoirs - Web admin</h1>

                    {/* Bouton GitHub sous le h1 */}
                    <a
                        href="https://github.com/alexkjzz/brasserie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 mt-4 text-stone-300 hover:text-white transition duration-200"
                    >
                        <Github size={28} />
                        <span className="text-lg font-medium">Voir sur GitHub</span>
                    </a>

                    <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                        Ce projet vise à <span className="font-bold">moderniser l’image</span> de la Brasserie Terroir & Savoirs grâce au numérique. Il inclut la création d’un <span className="font-bold">site vitrine</span> et d’un <span className="font-bold">outil de gestion</span> des stocks, des clients et des réservations via son <span className="font-bold">CRUD</span> associé.
                    </p>
                </section>

                {/* Technologies utilisées */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Technologies utilisées</h2>
                    <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
                        <li><span className="font-bold">Next.js</span> (TypeScript) – Développement du site vitrine</li>
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
                            <p>Utilisation de <span className="font-bold">GitHub</span> pour le suivi des évolutions et la correction des bugs.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Mettre à disposition des utilisateurs un service informatique</h3>
                            <p>Déploiement du site et configuration du système de gestion pour faciliter l’utilisation et l’exploitation des données.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Développer la présence en ligne de l'organisation</h3>
                            <p>Création d’un site web vitrine pour améliorer la visibilité de la brasserie et faciliter la réservation.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Organiser son développement professionnel</h3>
                            <p>Utilisation d’outils modernes (<span className="font-bold">Next.js, Symfony, MySQL</span>) et réalisation de veille technologique.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Gérer le patrimoine informatique</h3>
                            <p>Mise en place d’une base de données <span className="font-bold">MySQL</span> pour la gestion des stocks et des réservations.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Travailler en mode projet</h3>
                            <p>Collaboration via <span className="font-bold">GitHub</span>, planification et gestion des tâches en équipe.</p>
                        </div>
                    </div>
                </section>
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg flex flex-col">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Contexte du projet</h2>
                    <p className="text-stone-300 mt-3 text-lg max-w-3xl">
                        Le contexte détaillé du projet a été formalisé et est <span className="font-bold">disponible en téléchargement</span>. Il inclut toutes les informations clés sur les objectifs, les méthodes et les choix techniques.
                    </p>
                    <a
                        href="/context_brasserie.pdf"
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
