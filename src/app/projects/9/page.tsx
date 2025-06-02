import { Github } from "lucide-react";

export default function ProjetGLPI() {
    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6">
                    <h1 className="text-4xl font-extrabold text-white">Projet GLPI / FusionInventory</h1>

                    <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                        Ce projet consistait à <span className="font-bold">installer et configurer GLPI</span> sur une machine <span className="font-bold">Debian</span> en respectant des normes de sécurité, puis à intégrer le <span className="font-bold">plugin FusionInventory</span> pour réaliser l’inventaire matériel et logiciel.
                    </p>
                </section>

                {/* Technologies utilisées */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Technologies utilisées</h2>
                    <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
                        <li>Debian (installation du serveur GLPI)</li>
                        <li>GLPI (gestion de parc informatique et tickets d’assistance)</li>
                        <li>FusionInventory (collecte des informations des postes de travail)</li>
                        <li>MySQL (base de données sécurisée avec <span className="font-bold">sudo mysql_secure_installation</span>)</li>
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
                                <li>Installation et sécurisation du serveur <span className="font-bold">GLPI</span> sur Debian.</li>
                                <li>Configuration avancée avec suppression des fichiers d’installation et modification des mots de passe par défaut.</li>
                            </ul>
                        </div>

                        {/* Répondre aux incidents et aux demandes d’assistance */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Répondre aux incidents et aux demandes d’assistance</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Intégration de <span className="font-bold">FusionInventory</span> pour remonter les informations des postes.</li>
                                <li>Mise en place d’un système de <span className="font-bold">gestion des tickets</span> et suivi des interventions.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="w-full flex flex-col items-center gap-6">
                    {/* Conteneur des images disposées verticalement */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-col items-center">
                            <img
                                alt="gpli_vm"
                                src="/glpi_vm.png"
                                className="rounded-lg shadow-lg h-auto"
                            />
                            <p className="text-stone-400 text-sm mt-2">VM GPLI</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                alt="gpli"
                                src="/glpi.png"
                                className="rounded-lg shadow-lg w-[900px] h-auto"
                            />
                            <p className="text-stone-400 text-sm mt-2">GLPI</p>
                        </div>

                    </div>
                </section>
            </div>
        </main>
    );
}
