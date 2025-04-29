export default function ProjetTourDeFrance() {
    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6">
                    <h1 className="text-4xl font-extrabold text-white">Tour de France</h1>

                    <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">  
                        Dans le cadre d'une étude approfondie sur la gestion des données du <span className="font-bold">Tour de France</span>, nous avons conçu une base de données optimisée et une interface homme-machine permettant la gestion efficace des données.
                    </p>
                </section>

                {/* Technologies utilisées */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Technologies utilisées</h2>
                    <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
                        <li>SQL (gestion de la base de données)</li>
                        <li>PHP - Modèle MVC (développement backend structuré)</li>
                        <li>GitHub (gestion du projet et versioning)</li>
                        <li>Trello (organisation des tâches et suivi des étapes du projet)</li>
                    </ul>
                </section>

                {/* Compétences acquises */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Compétences acquises</h2>

                    <div className="text-stone-300 mt-3 space-y-4 text-lg">
                        {/* Gestion du patrimoine informatique */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Gestion du patrimoine informatique</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Conception d'un <span className="font-bold">Modèle Conceptuel de Données (MCD)</span>.</li>
                                <li>Recensement des dépendances fonctionnelles et des règles de calcul.</li>
                            </ul>
                        </div>

                        {/* Travailler en mode projet */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Travailler en mode projet</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Utilisation de <span className="font-bold">GitHub</span> pour le versionning du code.</li>
                                <li>Planification structurée avec <span className="font-bold">Trello</span>.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Images du projet */}
                <section className="w-full text-center space-y-6">
                    <div>
                        <h4 className="text-xl font-semibold text-white">Modèle Conceptuel de Données (MCD)</h4>
                        <img
                            alt="Aperçu du MCD"
                            src="img/TourDeFranceMCD.jpg"
                            className="rounded-lg shadow-lg w-full max-w-2xl mx-auto"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white">Interface CRUD</h4>
                        <img
                            alt="CRUD Tour de France"
                            src="img/TourDeFranceCRUD.jpg"
                            className="rounded-lg shadow-lg w-full max-w-2xl mx-auto"
                        />
                    </div>
                </section>

            </div>
        </main>
    );
}
