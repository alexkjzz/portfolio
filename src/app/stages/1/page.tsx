export default function NorthCreation() {
    return (
    <main className="flex justify-center items-start w-full p-12">
        <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

        {/* En-tête */}
        <section className="text-left w-full border-b border-stone-500 pb-6">
            <h1 className="text-4xl font-extrabold text-white">Stage chez NorthCreation</h1>
            <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
            Stage de 7 semaines en développement web chez <span className="font-bold">NorthCreation</span>.  
            Participation active à la conception et au développement d'une application facilitant la mise en relation 
            entre des <span className="font-bold">patients atteints d'Alzheimer</span> et des <span className="font-bold">coachs spécialisés</span>.
            </p>
        </section>

        {/* Ma mission */}
        <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Mission et responsabilités</h2>
            <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg">
            <li>Mise en place du <span className="font-bold">back-office</span> pour les administrateurs</li>
            <li>Développement du <span className="font-bold">back-office en React</span></li>
            <li>Intégration et gestion des <span className="font-bold">bases de données MySQL</span></li>
            </ul>
        </section>

        {/* Technologies utilisées */}
        <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Technologies utilisées</h2>
            <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
            <li>MySQL</li>
            <li>React</li>
            </ul>
        </section>

        {/* Image du projet */}
        <section className="w-full text-center">
            <img
            alt="Back Office - NorthCreation"
            src="/stage-mcd-north.png"
            className="rounded-lg shadow-lg w-full max-w-2xl mx-auto mt-6"
            />
        </section>

        {/* Compétences acquises */}
        <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Compétences acquises</h2>

            <div className="text-stone-300 mt-3 space-y-4 text-lg">
            <div>
                <h3 className="text-xl font-semibold text-white">Développement et montée en compétences</h3>
                <p className="leading-relaxed">
                Approfondissement des connaissances en <span className="font-bold">React</span> et <span className="font-bold">MySQL</span> via la mise en pratique et des ressources externes.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-white">Gestion du patrimoine informatique</h3>
                <p className="leading-relaxed">
                Intégration de bases de données <span className="font-bold">MySQL</span> et mise en place de solutions sécurisées pour le stockage des informations.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-white">Méthodologie agile et travail d'équipe</h3>
                <p className="leading-relaxed">
                Expérience de travail en <span className="font-bold">équipe</span>, gestion des tâches via <span className="font-bold">GitHub</span> et <span className="font-bold">Trello</span>, 
                et mise en place de processus adaptés aux retours clients.
                </p>
            </div>
            </div>
        </section>

        </div>
    </main>
    );
}
