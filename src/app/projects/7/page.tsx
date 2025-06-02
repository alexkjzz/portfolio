import { Github } from "lucide-react";

export default function ProjetAgenda() {
    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6">
                    <h1 className="text-4xl font-extrabold text-white">Projet Agenda</h1>

                    {/* Bouton GitHub sous le h1 */}
                    <a
                        href="https://github.com/lucien-wrq/Agenda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 mt-4 text-stone-300 hover:text-white transition duration-200"
                    >
                        <Github size={28} />
                        <span className="text-lg font-medium">Voir sur GitHub</span>
                    </a>

                    <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                        À la suite d'un cours sur les fondamentaux du <span className="font-bold">PHP</span> et de <span className="font-bold">MySQL</span>, 
                        nous avons été lancés sur la réalisation d'un agenda. Ce travail de groupe visait à mettre en place cette solution.
                    </p>
                </section>

                {/* Technologies utilisées */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Technologies utilisées</h2>
                    <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
                        <li>PHP (développement backend et gestion des événements)</li>
                        <li>MySQL (base de données pour stocker les événements)</li>
                        <li>HTML & CSS (interfaces utilisateur)</li>
                        <li>GitHub (gestion du projet et versioning)</li>
                        <li>Trello (organisation des tâches)</li>
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
                                <li>Division du travail entre <span className="font-bold">Frontend</span> (HTML & CSS) et <span className="font-bold">Backend</span> (PHP & MySQL).</li>
                                <li>Planification structurée avec <span className="font-bold">GitHub</span> et <span className="font-bold">Trello</span>.</li>
                                <li>Répartition des tâches : conception de la base de données, développement des scripts PHP et interfaces utilisateur.</li>
                            </ul>
                        </div>

                        {/* Organiser son développement professionnel */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Organiser son développement professionnel</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Approfondissement de l’apprentissage du <span className="font-bold">PHP</span> et des bases de données.</li>
                                <li>Travail en équipe et gestion efficace du projet.</li>
                            </ul>
                        </div>

                        {/* Gérer le patrimoine informatique */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Gérer le patrimoine informatique</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Conception d’un <span className="font-bold">MCD</span> (Modèle Conceptuel de Données) en amont du développement pour structurer les données.</li>
                                <li>Création d’un <span className="font-bold">diagramme de classes</span> pour planifier l’architecture logicielle du projet.</li>
                            </ul>
                        </div>

                        {/* Mettre à disposition des utilisateurs un service informatique */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Mettre à disposition des utilisateurs un service informatique</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Mise en place d’une <span className="font-bold">interface en ligne de commande (CLI)</span> pour permettre aux utilisateurs de s’authentifier et d’interagir avec le service.</li>
                                <li>Fonctionnalités accessibles aux utilisateurs via l’interface CLI : authentification, consultation, gestion des événements.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Images */}
                <section className="w-full flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-col items-center">
                            <img
                                alt="agenda"
                                src="/agenda.png"
                                className="rounded-lg shadow-lg w-[900px] h-auto"
                            />
                            <p className="text-stone-400 text-sm mt-2">Aperçu Agenda</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                alt="bdd_agenda"
                                src="/bdd_agenda.png"
                                className="rounded-lg shadow-lg w-[900px] h-auto"
                            />
                            <p className="text-stone-400 text-sm mt-2">BDD Agenda</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                alt="git_agenda"
                                src="/git_agenda.png"
                                className="rounded-lg shadow-lg w-[900px] h-auto"
                            />
                            <p className="text-stone-400 text-sm mt-2">GitHub Agenda</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
