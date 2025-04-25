const techStack = [
    { icon: "html5", label: "HTML5" },
    { icon: "css3", label: "CSS3" },
    { icon: "javascript", label: "JavaScript" },
    { icon: "react", label: "React" },
    { icon: "nodejs", label: "Node.js" },
    { icon: "python", label: "Python" },
    { icon: "mysql", label: "MySQL" },
    { icon: "csharp", label: "C#" },
    { icon: "nextjs", label: "Next.js" },
    { icon: "typescript", label: "TypeScript" },
];

export default function Technologies() {
    return (
    <section >
        <h2 className="text-2xl text-center mb-6">Technologies</h2>
        <ul className="grid grid-cols-2 gap-6 text-lg text-stone-300">
        {techStack.map((tech, index) => (
            <li key={index} className="flex items-center gap-4">
            <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                alt={tech.label}
                className="w-10 h-10"
            />
            {tech.label}
            </li>
        ))}
        </ul>
    </section>
    );
}
