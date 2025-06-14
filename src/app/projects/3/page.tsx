
export default function ProjetWordPress() {
    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-extrabold text-white">Projet WordPress</h1>
                        <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                            Développement d’un site WordPress : installation en local, choix du thème, création de pages,
                            intégration de formulaires et optimisation SEO avec <span className="font-bold">Yoast SEO</span>.
                        </p>
                    </div>
                </section>

                {/* Technologies utilisées */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Technologies utilisées</h2>
                    <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
                        <li>WordPress (CMS pour la création et gestion de contenu)</li>
                        <li>Yoast SEO (optimisation du référencement naturel)</li>
                        <li>HTML & CSS (personnalisation du thème et du design)</li>
                    </ul>
                </section>

                {/* Compétences acquises */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Compétences acquises</h2>

                    <div className="text-stone-300 mt-3 space-y-4 text-lg">
                        {/* Développer la présence en ligne */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Développer la présence en ligne</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Création d’un site vitrine mettant en avant les services et contenus.</li>
                                <li>Optimisation SEO avec <span className="font-bold">Yoast SEO</span> pour améliorer la visibilité sur Google.</li>
                            </ul>
                        </div>

                        {/* Mettre à disposition un service informatique */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">Mettre à disposition des utilisateurs un service informatique</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Installation et configuration de <span className="font-bold">WordPress</span> en local.</li>
                                <li>Personnalisation du site avant un éventuel déploiement.</li>
                            </ul>
                        </div>

                    </div>
                </section>

                {/* Image du projet */}
                <section className="w-full flex flex-col items-center gap-6">
                    
                    {/* Première ligne avec deux images */}
                    <div className="flex justify-center gap-6">
                        <div className="flex flex-col items-center">
                            <img
                                alt="Interface EPSI:STEM"
                                src="/wordpress.png"
                                width={900}
                                height={600}
                                className="mt-6 rounded-lg shadow-lg"
                            />
                            <p className="text-stone-400 text-sm mt-2">Wordpress Pages</p>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
