import { Github } from "lucide-react";

export default function ProjetInfraRes() {
    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6">
                    <h1 className="text-4xl font-extrabold text-white">Projet Infra Res</h1>
                    
                    {/* Bouton GitHub sous le h1 */}
                    <a
                        href="https://github.com/alexkjzz/Projet_infra_res"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 mt-4 text-stone-300 hover:text-white transition duration-200"
                    >
                        <Github size={28} />
                        <span className="text-lg font-medium">Voir sur GitHub</span>
                    </a>

                    <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                        Ce projet de groupe, réalisé dans le cadre du cours de systèmes et réseaux à l'EPSI, 
                        vise à concevoir une architecture client-serveur en environnement virtuel avec <span className="font-bold">VMware</span>. 
                        L'objectif est de créer une maquette de gestion de réservations d'hôtel hébergée sur un serveur web 
                        utilisant <span className="font-bold">WAMP, MySQL et phpMyAdmin</span>.  
                        Un <span className="font-bold">contrôleur de domaine sous Windows Server 2016</span> est mis en place 
                        pour renforcer la sécurité via Active Directory, avec des services DNS et FTP.
                    </p>
                </section>

                {/* Technologies utilisées */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Technologies utilisées</h2>
                    <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
                        <li>VMware (virtualisation des machines)</li>
                        <li>Windows Server 2016 (contrôleur de domaine et authentification AD)</li>
                        <li>WAMP, MySQL et phpMyAdmin (gestion et hébergement des réservations)</li>
                        <li>Active Directory (gestion sécurisée des utilisateurs)</li>
                        <li>Cisco Packet Tracer (modélisation du réseau)</li>
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
                                <li>Gestion du projet avec <span className="font-bold">Trello</span> pour le suivi des tâches.</li>
                                <li>Répartition des responsabilités : mise en place des machines, configuration réseau, etc.</li>
                                <li>Phases du projet : virtualisation, installation des services, tests d’authentification.</li>
                            </ul>
                        </div>

                        {/* Gérer le patrimoine informatique */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Gérer le patrimoine informatique</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Mise en place d’une <span className="font-bold">infrastructure pérenne</span> avec Active Directory.</li>
                                <li>Configuration des services DNS et FTP pour la gestion des accès.</li>
                                <li>Maintenance et documentation des étapes pour assurer la pérennité.</li>
                            </ul>
                        </div>

                        {/* Organiser son développement professionnel */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Organiser son développement professionnel</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Auto-formation sur <span className="font-bold">Active Directory</span> et gestion réseau.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Images du projet */}
                <section className="w-full flex flex-col items-center gap-6">
                    {/* Conteneur des deux images côte à côte */}
                    <div className="flex justify-center gap-6">
                        <div className="flex flex-col items-center">
                            <img
                                alt="git"
                                src="/projet_infra_git.png"
                                className="rounded-lg shadow-lg w-[600px] h-[300px] object-cover"
                            />
                            <p className="text-stone-400 text-sm mt-2">Github</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                alt="git"
                                src="/cisco_infra.png"
                                className="rounded-lg shadow-lg"
                            />
                            <p className="text-stone-400 text-sm mt-2">Cisco Packet Tracer</p>
                        </div>
                    </div>
                </section>


            </div>
        </main>
    );
}
