export default function Veille() {
    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6">
                    <h1 className="text-4xl font-extrabold text-white">Le rôle de l’IA dans la fraude et la désinformation</h1>
                    <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                        Une analyse approfondie des impacts de l’intelligence artificielle sur la fraude numérique et la propagation de fausses informations, ainsi que des solutions développées pour y remédier.
                    </p>
                </section>

                {/* Méthodologie */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Méthodologie de la veille</h2>
                    <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                        Pour réaliser cette veille, j’ai utilisé des outils comme <span className="font-bold">Google Alert</span> afin de suivre les tendances émergentes liées à l’IA, particulièrement dans les domaines de la fraude et de la désinformation. Ce suivi m’a permis d’analyser les méthodes employées pour manipuler l’information et les stratégies mises en place pour détecter ces menaces.
                    </p>
                </section>

                {/* Impact de l’IA sur la désinformation */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">L’IA et la désinformation</h2>

                    {/* Deepfakes */}
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-white">Deepfakes</h3>
                        <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                            Les deepfakes sont des vidéos ou images manipulées grâce à des algorithmes avancés. Ils permettent d’imiter la voix ou le visage d’une personne pour lui attribuer des propos ou des actions qu’elle n’a jamais effectués.
                        </p>
                    </div>

                    {/* Modèles de langage */}
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-white">Modèles de langage</h3>
                        <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                            Les modèles de langage avancés, comme GPT-4, permettent de générer automatiquement des textes qui semblent crédibles. Cette capacité facilite la diffusion massive de fausses informations, influençant l’opinion publique et compliquant la distinction entre vrai et faux.
                        </p>
                    </div>
                </section>

                {/* Solutions pour détecter et contrer la fraude */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Détection et lutte contre la fraude</h2>

                    {/* Outils de détection */}
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-white">Outils de détection des deepfakes</h3>
                        <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                            Des outils comme <span className="font-bold">Microsoft Video Authenticator</span> ou <span className="font-bold">Deepware Scanner</span> permettent d’identifier les manipulations invisibles dans les fichiers multimédias. Ces solutions sont aujourd’hui cruciales pour contrer la propagation de fausses informations.
                        </p>
                    </div>

                    {/* IA au service de la vérification */}
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-white">Modèle RAG : une IA au service de la vérification</h3>
                        <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                            Le modèle <span className="font-bold">RAG</span> (Génération Augmentée de Récupération) vérifie la véracité d’une information en la comparant à des sources fiables comme les publications scientifiques et les rapports du GIEC, évitant ainsi la désinformation.
                        </p>
                    </div>
                </section>

                {/* Conséquences et défis persistants */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Conséquences et défis</h2>

                    {/* Fraude financière */}
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-white">Fraude financière</h3>
                        <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                            Les cybercriminels exploitent l’IA pour améliorer leurs techniques de fraude. Près de <span className="font-bold">42,5 % des attaques numériques</span> utilisent des deepfakes ou des procédés comme le credential stuffing, qui vole des données sensibles.
                        </p>
                    </div>

                    {/* Usurpation d’identité */}
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-white">Usurpation d’identité</h3>
                        <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                            L’usurpation d’identité via IA devient un problème croissant. Par exemple, de fausses annonces de décès ont été générées pour manipuler l’opinion publique et générer des profits frauduleux.
                        </p>
                    </div>

                    {/* Désinformation politique */}
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-white">Désinformation politique</h3>
                        <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                            Les élections sont particulièrement vulnérables à la propagation de fausses informations générées par l’IA. Des lois tentent de limiter ces pratiques, mais leur application soulève des questions sur la régulation et la liberté d’expression.
                        </p>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Conclusion</h2>
                    <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                        L’IA représente un double enjeu : elle facilite la désinformation, mais elle permet aussi de la combattre. La mise en place d’outils de vérification et une coopération entre les acteurs publics et privés sont essentielles pour assurer une information fiable et sécurisée.
                    </p>
                </section>

                {/* Sources */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Sources</h2>
                    <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
                        <li>Rapport du GIEC (2023)</li>
                        <li>Microsoft Video Authenticator Documentation</li>
                        <li>MIT Technology Review (2024)</li>
                        <li>Études sur les deepfakes, TechCrunch (2024)</li>
                    </ul>
                </section>

            </div>
        </main>
    );
}
