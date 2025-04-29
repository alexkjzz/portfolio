import Link from "next/link";
import projectsData from "@/data/data.json";

export default function Projects() {

    const projects = projectsData.projects;

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
                        <section 
                            key={project.id} 
                            className="bg-stone-800 p-6 rounded-lg shadow-lg flex flex-col justify-between items-center text-center min-h-[250px]"
                        >
                            <h2 className="text-xl font-bold text-white border-b border-stone-500 pb-3 w-full">{project.name}</h2>
                            <p className="text-stone-300 text-sm mt-2">{project.category}</p>
                            <p className="text-stone-400 mt-2 text-sm flex-grow">{project.description}</p>
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
