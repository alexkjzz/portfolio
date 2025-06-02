export default function Decathlon() {
    return (
    <main className="flex justify-center items-start w-full p-12">
        <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

        {/* En-tête */}
        <section className="text-left w-full border-b border-stone-500 pb-6">
            <h1 className="text-4xl font-extrabold text-white">Stage chez Decathlon</h1>
            <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
            Pendant mon stage chez <span className="font-bold">Decathlon</span>, j’ai eu l’opportunité de travailler avec 
            des outils essentiels pour la gestion du code et l’organisation du travail, permettant une collaboration fluide et efficace.
            </p>
        </section>

        {/* Gestion du code et organisation */}
        <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Gestion du code et organisation du travail</h2>
            <p className="text-stone-300 mt-3 text-lg leading-relaxed">
            Utilisation de <span className="font-bold">GitHub</span> pour une gestion propre et sécurisée du code, limitant les conflits de version et garantissant une collaboration optimale.
            </p>
            <p className="text-stone-300 mt-3 text-lg leading-relaxed">
            Organisation des tâches via <span className="font-bold">Jira</span>, permettant de suivre les <em>User Stories (US)</em> et gérer les priorités de développement avec efficacité.
            </p>
        </section>

        {/* Tâches réalisées */}
        <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Tâches réalisées</h2>
            <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg">
            <li>Correction et optimisation de traductions dans un fichier JSON.</li>
            <li>Ajustement dynamique de la taille des titres dans un tableau AgGrid.</li>
            <li>Persistance des choix dans un dropdown sans stockage local.</li>
            <li>Optimisation du formatage et amélioration du visuel du Scope Preview.</li>
            <li>Application de changements dynamiques sur les Chips d’un tableau AgGrid.</li>
            <li>Reformatage complet d’une page pour améliorer l'expérience utilisateur.</li>
            </ul>
        </section>

        {/* Image du projet */}
        <section className="w-full text-center">
            <img
            alt="Projet chez Decathlon"
            src="/decathlon-digital.png"
            className="rounded-lg shadow-lg w-full max-w-2xl mx-auto mt-6"
            />
        </section>

        <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Compétences acquises</h2>

        <div className="text-stone-300 mt-3 space-y-4 text-lg">

            {/* Répondre aux incidents et aux demandes d’assistance et d’évolution */}
            <div>
            <h3 className="text-xl font-semibold text-white">Répondre aux incidents et aux demandes d’assistance et d’évolution</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Utilisation de <span className="font-bold">Jira</span> pour le suivi et la priorisation des tickets.</li>
                <li>Correction de bugs via <span className="font-bold">GitHub</span> avec création de branches, pull requests et revues de code.</li>
            </ul>
            </div>

            {/* Mettre à disposition des utilisateurs un service informatique */}
            <div>
            <h3 className="text-xl font-semibold text-white">Mettre à disposition des utilisateurs un service informatique</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Développement de composants avec <span className="font-bold">React</span> et <span className="font-bold">Next.js</span>.</li>
                <li>Déploiement dans des environnements de test pour validation utilisateur.</li>
            </ul>
            </div>

            {/* Travailler en mode projet */}
            <div>
            <h3 className="text-xl font-semibold text-white">Travailler en mode projet</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Organisation du travail via <span className="font-bold">Jira</span> avec des sprints agiles.</li>
                <li>Utilisation collaborative de <span className="font-bold">GitHub</span> pour gérer le code et suivre les évolutions.</li>
            </ul>
            </div>

            {/* Gérer le patrimoine informatique */}
            <div>
            <h3 className="text-xl font-semibold text-white">Gérer le patrimoine informatique</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Maintenance et amélioration d’une base de code existante.</li>
                <li>Refactorisation de composants pour améliorer la lisibilité et les performances.</li>
            </ul>
            </div>

            {/* Organiser son développement professionnel */}
            <div>
            <h3 className="text-xl font-semibold text-white">Organiser son développement professionnel</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Participation à des <span className="font-bold">formations internes Decathlon</span> (outils, bonnes pratiques, technologies).</li>
                <li>Réalisation d’une <span className="font-bold">veille technologique</span> continue pour rester à jour avec les évolutions du développement web.</li>
            </ul>
            </div>

        </div>
        </section>




        </div>
    </main>
    );
}
