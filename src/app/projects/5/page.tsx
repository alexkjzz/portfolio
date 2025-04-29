
export default function ProjetSWAPI() {
    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-extrabold text-white">Projet SWAPI</h1>
                        <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                            Une application <span className="font-bold">Python</span> intégrant <span className="font-bold">SQLite</span> et <span className="font-bold">SQLAlchemy</span>,
                            permettant aux utilisateurs d’ajouter des films de Star Wars à une liste de favoris et de les consulter.
                            Elle inclut également un rôle administrateur pour la gestion des statistiques.
                        </p>
                    </div>
                </section>

                {/* Technologies utilisées */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Technologies utilisées</h2>
                    <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
                        <li>Python 3.12</li>
                        <li>SQLite & SQLAlchemy (gestion et structuration de la base de données)</li>
                        <li>Flask (framework backend léger)</li>
                        <li>API Swapi (récupération de données dynamiques sur Star Wars)</li>
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
                                <li>Utilisation de <span className="font-bold">ClickUp</span> pour organiser et suivre les tâches du projet.</li>
                                <li>Collaboration et communication efficace via <span className="font-bold">Discord</span>.</li>
                                <li>Mise en place du <span className="font-bold">pair programming</span> pour améliorer la qualité du code.</li>
                            </ul>
                        </div>

                        {/* Mettre à disposition un service informatique */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Mettre à disposition un service informatique</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Développement d’un <span className="font-bold">système d’authentification</span> avec rôles utilisateur et administrateur.</li>
                                <li>Gestion fiable des données avec <span className="font-bold">SQLite</span> et <span className="font-bold">SQLAlchemy</span>.</li>
                                <li>Persistance des favoris, même après déconnexion.</li>
                            </ul>
                        </div>

                        {/* Organiser son développement professionnel */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Organiser son développement professionnel</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Approfondissement des connaissances en <span className="font-bold">SQLite</span>, <span className="font-bold">SQLAlchemy</span> et <span className="font-bold">API REST</span>.</li>
                            </ul>
                        </div>
                    </div>
                </section>


                <section className="w-full flex flex-col items-center gap-6">

                    {/* Première ligne avec deux images */}
                    <div className="flex justify-center gap-6">
                        <div className="flex flex-col items-center">
                            <img
                                alt="API Swapi Aperçu"
                                src="/film_swapi.png"
                                className="rounded-lg shadow-lg w-full max-w-2xl mx-auto"
                            />
                            <p className="text-stone-400 text-sm mt-2">Aperçu</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                alt="Aperçu Interface"
                                src="/api_swapi.png"
                                className="rounded-lg shadow-lg w-full max-w-2xl mx-auto"
                            />
                            <p className="text-stone-400 text-sm mt-2">Api</p>
                        </div>
                    </div>

                    {/* Image Trello en dessous */}
                    <div className="flex flex-col items-center mt-6">
                        <img
                            alt="Gestion de projet ClickUp"
                            src="/clickup_swapi.png"
                            className="rounded-lg shadow-lg w-full max-w-2xl mx-auto"
                        />
                        <p className="text-stone-400 text-sm mt-2">ClickUp</p>
                    </div>

                </section>

            </div>
        </main>
    );
}
