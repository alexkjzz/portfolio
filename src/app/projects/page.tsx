import Link from "next/link";

export default function Projects() {
const projects = [
    { id: 1, name: "TP rentrée n°1", image: "img/1.jpg", category: "Développement Web", description: "Premier projet de rentrée, explorant les bases du développement." },
    { id: 2, name: "TP rentrée n°2", image: "img/1.jpg", category: "Développement Web", description: "Approfondissement des concepts de programmation web." },
    { id: 3, name: "WordPress", image: "img/1.jpg", category: "CMS & Blogging", description: "Création et personnalisation d’un site WordPress." },
    { id: 4, name: "CV githubio", image: "img/1.jpg", category: "Portfolio", description: "Mise en ligne d’un CV interactif via GitHub Pages." },
    { id: 5, name: "SWAPI", image: "img/1.jpg", category: "API & Données", description: "Utilisation de l'API Star Wars pour récupérer des données dynamiques." },
    { id: 6, name: "Projet Infra Res", image: "img/1.jpg", category: "Infrastructure & Réseaux", description: "Projet sur les configurations réseau et déploiement serveur." },
    { id: 7, name: "Projet Agenda", image: "img/1.jpg", category: "Organisation", description: "Développement d’un agenda interactif." },
];

return (
    <main className="flex justify-center items-start w-full p-12">
    <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

        {/* En-tête */}
        <section className="text-left w-full border-b border-stone-500 pb-6">
        <h1 className="text-4xl font-extrabold text-white">Mes Projets</h1>
        <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
            Découvrez mes différents projets.
        </p>
        </section>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
        {projects.map((project) => (
            <section key={project.id} className="bg-stone-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <h2 className="text-xl font-bold text-white border-b border-stone-500 pb-3">{project.name}</h2>
            <p className="text-stone-300 text-sm">{project.category}</p>
            <p className="text-stone-400 mt-2 text-sm">{project.description}</p>
            <Link
                href={`/projects/${project.id}`}
                className="mt-4 px-4 py-2 bg-stone-700 text-white rounded-lg hover:bg-stone-500 transition duration-200 inline-block"
            >
                Voir plus
            </Link>
            </section>
        ))}
        </div>

    </div>
    </main>
);
}
