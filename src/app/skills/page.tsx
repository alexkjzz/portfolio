"use client";

import { useState } from "react";
import competencesData from "@/data/data.json";
import { FaFileExcel } from "react-icons/fa";

const Competences = () => {
    const [activeCompetence, setActiveCompetence] = useState<string | null>(null);

    // Fonction pour activer/désactiver l'affichage des projets associés
    const toggleCompetence = (competenceId: string) => {
        setActiveCompetence(activeCompetence === competenceId ? null : competenceId);
    };

    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">
                
                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6">
                    <h1 className="text-4xl font-extrabold text-white">Mes Compétences</h1>
                    <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                        Découvrez mes compétences développées et leurs détails.
                    </p>
                    <a 
                        href="/competences.xlsx" 
                        download
                        className="mt-4 flex items-center w-fit px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-200"
                    >
                        <FaFileExcel className="mr-2 text-xl" />
                        Télécharger en Excel
                    </a>
                </section>

                {/* Liste des compétences avec bouton "Voir plus" fonctionnel */}
                <section className="bg-stone-800 p-6 rounded-lg shadow-lg w-full mt-8">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Liste des Compétences</h2>

                    {competencesData.competences.map((competence, index) => (
                        <div key={competence.id} className="mt-4 flex flex-col">
                            
                            {/* Titre de la compétence */}
                            <h3 className="text-xl font-semibold text-white">{competence.name}</h3>
                            <p className="text-stone-300">{competence.description}</p>

                            {/* Bouton "Voir plus" avec taille ajustée et interactivité */}
                            <button
                                className="mt-2 w-fit px-3 py-1 text-sm bg-stone-700 text-white rounded-lg hover:bg-stone-500 transition duration-200 self-start"
                                onClick={() => toggleCompetence(competence.id)}
                            >
                                {activeCompetence === competence.id ? "Fermer" : "Voir plus"}
                            </button>

                            {/* Affichage conditionnel des projets associés */}
                            {activeCompetence === competence.id && (
                                <div className="mt-2 transition-all duration-300">
                                    <h4 className="text-lg font-bold text-white mt-4">Projets associés :</h4>
                                    {competencesData.projects.filter(project => project.competences.includes(competence.id))
                                    .map(project => (
                                        <div key={project.id} className="mt-2 bg-stone-600 p-4 rounded-lg shadow-md">
                                            <h4 className="text-lg font-bold text-white">{project.name}</h4>
                                            <p className="text-stone-300">{project.category}</p>
                                            <p className="text-stone-400 text-sm">{project.description}</p>

                                            {/* Bouton pour accéder à la page du projet */}
                                            <a 
                                                href={`/projects/${project.id}`} 
                                                className="mt-2 px-4 py-1 text-sm bg-stone-500 text-white rounded-lg hover:bg-stone-400 transition duration-200 inline-block"
                                            >
                                                Voir projet
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Barre de séparation */}
                            {index < competencesData.competences.length - 1 && (
                                <div className="border-b border-stone-500 mt-4"></div>
                            )}
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default Competences;
