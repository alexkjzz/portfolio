import Link from "next/link";

export default function Competences() {
    const competences = [
        { id: "repondreIncidents", name: "Répondre aux incidents et aux demandes d'assistance et d'évolution", category: "Support & Maintenance", description: "Gestion des demandes utilisateurs, résolution d’incidents et suivi des évolutions logicielles." },
        { id: "mettreDispoService", name: "Mettre à disposition des utilisateurs un service informatique", category: "Déploiement & Infrastructure", description: "Déploiement et maintenance des services informatiques, intégration de nouvelles solutions et accompagnement des utilisateurs." },
        { id: "presenceEnLigne", name: "Développer la présence en ligne de l'organisation", category: "Web & Référencement", description: "Création et optimisation de sites web, gestion du référencement et des réseaux sociaux." },
        { id: "organiserDevPro", name: "Organiser son développement professionnel", category: "Évolution & Veille", description: "Auto-formation, veille technologique et amélioration continue des compétences." },
        { id: "gererPatrimoine", name: "Gérer le patrimoine informatique", category: "Administration & Sécurité", description: "Administration des infrastructures, gestion des sauvegardes et sécurité des systèmes." },
        { id: "modeProjet", name: "Travailler en mode projet", category: "Collaboration & Méthodologie", description: "Planification, travail d’équipe et utilisation d’outils de gestion comme Trello et GitHub." }
    ];

    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6">
                    <h1 className="text-4xl font-extrabold text-white">Mes Compétences</h1>
                    <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                        Découvrez mes compétences développée.
                    </p>
                </section>

                {/* Carte unique contenant toutes les compétences */}
                <section className="bg-stone-800 p-6 rounded-lg shadow-lg w-full mt-8">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Liste des Compétences</h2>

                    {competences.map((competence, index) => (
                        <div key={competence.id} className="mt-4 flex flex-col">
                            <h3 className="text-xl font-semibold text-white">{competence.category}</h3>
                            <p className="text-stone-300">{competence.name}</p>
                            <p className="text-stone-400 text-sm">{competence.description}</p>
                            
                            {/* Bouton "Voir plus" pour chaque compétence */}
                            <div className="mt-2">
                                <Link
                                    href={`/competences/${competence.id}`}
                                    className="px-4 py-2 bg-stone-700 text-white rounded-lg hover:bg-stone-500 transition duration-200 inline-block"
                                >
                                    Voir plus
                                </Link>
                            </div>

                            {/* Barre de séparation entre chaque compétence */}
                            {index < competences.length - 1 && <div className="border-b border-stone-500 mt-4"></div>}
                        </div>
                    ))}
                </section>

            </div>
        </main>
    );
}
