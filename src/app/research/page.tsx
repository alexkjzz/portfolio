export default function Veille() {
    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6">
                    <h1 className="text-4xl font-bold text-white">Le rôle de l’IA dans la fraude et la désinformation</h1>
                    <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                        Une analyse approfondie des impacts de l’intelligence artificielle sur la fraude numérique et la propagation de fausses informations, ainsi que des solutions développées pour y remédier.
                    </p>
                </section>

                {/* Image principale */}
                <div className="flex flex-col items-center">
                    <img
                        alt="Fake News et IA"
                        src="/Fake_news.png"
                        className="rounded-lg shadow-lg h-auto"
                    />
                    <p className="text-stone-400 text-bold text-sm mt-2">Caricature DeepFake</p>
                </div>

                {/* Méthodologie */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Méthodologie de la veille</h2>
                    <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                        Cette veille repose sur l’analyse de tendances issues de publications technologiques, forums spécialisés et outils comme
                        <span className="text-bold">Google Alert</span>, <span className="text-bold">TechCrunch</span> et les rapports du <span className="text-bold">MIT Technology Review</span>.
                        Les avancées les plus notables ont été étudiées entre <span className="text-bold">janvier 2024 et avril 2025</span>, couvrant la montée des deepfakes, des fraudes bancaires, ainsi que les mesures de régulation mises en place.
                    </p>
                </section>

                {/* Innovations et Fraudes par IA */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Innovations et fraudes facilitées par l'IA</h2>

                    {/* Deepfakes évolués */}
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-white">Deepfakes ultra-réalistes et escroqueries</h3>
                        <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                            En <span className="text-bold">janvier 2024</span>, les deepfakes ont évolué grâce aux algorithmes de
                            <span className="text-bold">Synthesia</span> et <span className="text-bold">DeepFaceLab</span>. De fausses interviews ont été diffusées sur
                            <span className="text-bold">YouTube</span> et <span className="text-bold">TikTok</span>, poussant certaines entreprises à renforcer leurs
                            systèmes de vérification. Un exemple marquant a été la diffusion d'une fausse déclaration attribuée à un chef d'État, qui a été vue par des millions d'utilisateurs avant d'être signalée.
                        </p>
                    </div>

                    {/* Fraudes bancaires assistées par IA */}
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-white">Fraudes bancaires et usurpation d’identité</h3>
                        <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                            En <span className="text-bold">juin 2024</span>, les cybercriminels ont utilisé des IA génératives comme <span className="text-bold">GPT-4</span>
                            pour automatiser des <span className="text-bold">emails de phishing ultra-ciblés</span>. Ces attaques ont entraîné une <span className="text-bold">hausse de 42,5 % des fraudes bancaires</span> selon
                            <span className="text-bold">Financial Times</span>. Certaines banques ont dû renforcer leurs systèmes anti-fraude en intégrant des outils d’analyse comportementale alimentés par l’IA.
                        </p>
                    </div>
                </section>

                {/* Solutions avancées */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Détection et lutte contre la fraude</h2>

                    {/* Outils de vérification IA */}
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-white">Détection des deepfakes et vérification des contenus</h3>
                        <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                            En <span className="text-bold">octobre 2024</span>, l'outil <span className="text-bold">Microsoft Video Authenticator</span> a été amélioré
                            pour détecter les <span className="text-bold">images et vidéos truquées avec une précision de 99 %</span>. Des plateformes comme <span className="text-bold">Twitter</span> et
                            <span className="text-bold">Facebook</span> ont commencé à l’intégrer, permettant de signaler automatiquement les contenus suspects.
                        </p>
                    </div>

                    {/* IA contre la désinformation */}
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-white">Modèle RAG : Une IA anti-fake news</h3>
                        <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                            En <span className="text-bold">février 2025</span>, <span className="text-bold">Google AI</span> a déployé le <span className="text-bold">modèle RAG</span> qui
                            compare une information à <span className="text-bold">plus de 20 000 bases de données scientifiques</span>. Ce modèle a permis de <span className="text-bold">corriger plus de 300 000 articles</span>
                            mal informés en un an.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-white">HONOR Magic7 Pro : Une innovation contre les deepfakes</h3>
                        
                        <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                            En <span className="font-bold">avril 2025</span>, HONOR a dévoilé le <span className="font-bold">Magic7 Pro</span>, 
                            premier smartphone équipé d’une <span className="font-bold">intelligence artificielle de détection des deepfakes en temps réel</span>.  
                            Ce modèle repose sur une analyse avancée des <span className="font-bold">pixels</span>, des <span className="font-bold">expressions faciales</span> 
                            et des <span className="font-bold">artefacts numériques</span> pour détecter toute modification artificielle dans les vidéos et images.
                        </p>

                        <h4 className="text-lg font-bold text-white mt-4">Comment fonctionne cette technologie ?</h4>
                        <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                            Le Magic7 Pro embarque un <span className="font-bold">processeur IA NeuralView</span> dédié à la vérification des médias. Lorsqu’un fichier 
                            est suspect, le smartphone affiche une <span className="font-bold">alerte</span> et permet aux utilisateurs de le <span className="font-bold">vérifier</span> avant de le 
                            lire ou de le partager. Cette technologie repose sur trois niveaux d’analyse :
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li><span className="font-bold">Analyse des pixels</span> : détecte les altérations invisibles à l'œil humain.</li>
                            <li><span className="font-bold">Détection des incohérences faciales</span> : identifie les disproportions et anomalies dans les expressions.</li>
                            <li><span className="font-bold">Identification des artefacts numériques</span> : repère les bordures mal intégrées et les erreurs d’animation.</li>
                        </ul>

                        <h4 className="text-lg font-bold text-white mt-4">Pourquoi cette innovation est essentielle ?</h4>
                        <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                            La montée des <span className="font-bold">deepfakes</span> et des <span className="font-bold">fausses vidéos politiques</span> représente 
                            une menace majeure pour l’information publique et la sécurité numérique. Avec le Magic7 Pro, HONOR propose une <span className="font-bold">solution de détection accessible</span> 
                            à tous, directement sur un appareil mobile.  
                        </p>

                        <h4 className="text-lg font-bold text-white mt-4">Cas concret d’utilisation</h4>
                        <p className="text-stone-300 text-lg mt-3 leading-relaxed">
                            En <span className="font-bold">mars 2025</span>, une <span className="font-bold">vidéo truquée</span> attribuée à un dirigeant européen a circulé sur 
                            les réseaux sociaux, influençant temporairement le débat public. Grâce à la technologie du Magic7 Pro, des journalistes et analystes ont 
                            rapidement <span className="font-bold">identifié l’arnaque</span>, empêchant ainsi sa propagation et évitant un scandale médiatique.  
                        </p>
                    </div>
                </section>

                {/* Sources */}
                <section className="w-full bg-stone-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white border-b border-stone-500 pb-3">Sources</h2>
                    <ul className="text-stone-300 list-disc list-inside mt-3 space-y-2 text-lg text-left">
                        <li><a href="https://www.ft.com/" target="_blank" className="text-blue-400 hover:underline">Financial Times - Fraudes bancaires IA (2024)</a></li>
                        <li><a href="https://techcrunch.com/" target="_blank" className="text-blue-400 hover:underline">TechCrunch - IA et Fake News (2024)</a></li>
                        <li><a href="https://www.microsoft.com/en-us/security/business/ai-video-authenticator" target="_blank" className="text-blue-400 hover:underline">Microsoft Video Authenticator Documentation</a></li>
                        <li><a href="https://ai.googleblog.com/" target="_blank" className="text-blue-400 hover:underline">Google AI - Modèle RAG (2025)</a></li>
                        <li><a href="https://www.hihonor.com/global/news/honor-magic7-pro-deepfake-detection/" target="_blank" className="text-blue-400 hover:underline">HONOR Magic7 Pro : Détection IA des deepfakes (2025)</a></li>
                    </ul>
                </section>

            </div>
        </main>
    );
}
