import Link from "next/link";

export default function Stages() {
    const stages = [
        { id: 1, name: "NorthCreation", image: "img/northcreation.jpg", category: "Santé & Technologie", description: "Application facilitant la mise en relation entre des patients atteints d'Alzheimer et des coachs spécialisés." },
        { id: 2, name: "Decathlon - Digital", image: "img/decathlon.jpg", category: "Logistique & Gestion", description: "Développement d'application de gestion de stocks et optimisation logistique." }
    ];

    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6">
                    <h1 className="text-4xl font-extrabold text-white">Mes Stages</h1>
                    <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                        Découvrez mes expériences de stages.
                    </p>
                </section>

                {/* Grille des stages */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
                    {stages.map((stage) => (
                        <section key={stage.id} className="bg-stone-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center min-h-[280px]">
                            
                            {/* Conteneur du titre et barre */}
                            <div className="w-full h-[80px] flex flex-col justify-center items-center">
                                <h2 className="text-xl font-bold text-white">{stage.name}</h2>
                                <div className="border-b border-stone-500 w-full mt-2"></div>
                            </div>

                            <p className="text-stone-300 text-sm">{stage.category}</p>
                            <p className="text-stone-400 mt-2 text-sm flex-grow">{stage.description}</p>

                            {/* Bouton toujours aligné en bas */}
                            <Link
                                href={`/stages/${stage.id}`}
                                className="mt-auto px-4 py-2 bg-stone-700 text-white rounded-lg hover:bg-stone-500 transition duration-200 inline-block"
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
