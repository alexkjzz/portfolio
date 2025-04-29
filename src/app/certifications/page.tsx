import Link from "next/link";

export default function Certifications() {
    const certifications = [
        { id: "mooc", name: "MOOC", status: "PDF Disponible", description: "Formation en ligne permettant d’acquérir des compétences en informatique et développement.", background: "bg-[#5C2A2A]", button: "bg-[#7A3A3A] hover:bg-[#944A4A]", link: "/LAMONNIER_Alexis_MOOC.pdf" },
        { id: "cnil", name: "CNIL", status: "ZIP Disponible", description: "Certification sur la protection des données personnelles et la conformité RGPD.", background: "bg-[#1E3A5F]", button: "bg-[#2E4D7A] hover:bg-[#3D5F94]", link: "/MOOC_CNIL.zip" },
        { id: "aws", name: "AWS", status: "EN COURS", description: "Certification de compétences sur les services cloud AWS et leur utilisation en entreprise.", background: "bg-green-900", button: "bg-green-800 hover:bg-green-700", link: "#" }
    ];

    return (
        <main className="flex justify-center items-start w-full p-12">
            <div className="gap-10 w-full max-w-6xl mt-12 flex flex-col items-start">

                {/* En-tête */}
                <section className="text-left w-full border-b border-stone-500 pb-6">
                    <h1 className="text-4xl font-extrabold text-white">Mes Certifications</h1>
                    <p className="text-stone-300 mt-3 text-lg leading-relaxed max-w-3xl">
                        Voici la liste de mes certifications et l'accès aux documents.
                    </p>
                </section>

                {/* Grille des certifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
                    {certifications.map((certif) => (
                        <section key={certif.id} className={`p-6 rounded-lg shadow-lg flex flex-col items-center text-center ${certif.background} text-white`}>
                            <div className="w-full h-[80px] flex flex-col justify-center items-center">
                                <h2 className="text-xl font-bold">{certif.name}</h2>
                                <div className="border-b border-white w-full mt-2"></div>
                            </div>
                            <p className="text-stone-300 text-sm mt-4">{certif.description}</p>

                            {/* Bouton avec le statut intégré */}
                            <Link
                                href={certif.link}
                                className={`mt-6 px-4 py-2 rounded-lg ${certif.button} text-white transition duration-200 inline-block`}
                            >
                                {certif.status}
                            </Link>
                        </section>
                    ))}
                </div>

            </div>
        </main>
    );
}
