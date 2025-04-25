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
            src="img/a1.jpg"
            className="rounded-lg shadow-lg w-full max-w-2xl mx-auto mt-6"
            />
        </section>

        {/* Défis et solutions */}
        <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Défis et solutions</h2>
            <p className="text-stone-300 mt-3 text-lg leading-relaxed">
            L’un des principaux défis a été la persistance d’une sélection dans un <em>dropdown</em> entre différentes pages 
            (<span className="font-bold">"Create Setting"</span> et la précédente), sans utiliser le stockage local. La solution mise en place a 
            été optimisée pour garantir une expérience utilisateur fluide, sans impact négatif sur l’application.
            </p>
            <p className="text-stone-300 mt-3 text-lg leading-relaxed">
            Une autre mission clé a été la <span className="font-bold">refonte complète d’une page</span> pour améliorer la cohérence avec le design global, 
            répondant à une demande spécifique d’un utilisateur et visant à perfectionner l’expérience utilisateur.
            </p>
        </section>

        {/* Compétences développées */}
        <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Compétences développées</h2>
            <p className="text-stone-300 mt-3 text-lg leading-relaxed">
            Ce stage chez Decathlon m’a permis de <span className="font-bold">développer des compétences interpersonnelles</span> 
            grâce aux nombreuses interactions avec différentes équipes, facilitant la compréhension des besoins métier et l’amélioration de la collaboration.
            </p>
        </section>

        {/* Sessions de veille et innovation */}
        <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Sessions de veille et innovation</h2>
            <p className="text-stone-300 mt-3 text-lg leading-relaxed">
            Participation à des <span className="font-bold">visioconférences</span> organisées par le staff engineer, offrant des 
            mises à jour technologiques et des bonnes pratiques en informatique. Ces sessions de veille permettaient d’explorer des innovations 
            et d’adopter les nouveautés selon les besoins du projet.
            </p>
        </section>

        </div>
    </main>
    );
}
