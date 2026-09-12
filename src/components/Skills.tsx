import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
        title: "Backend",
        skills: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "Drizzle ORM",
            "REST APIs",
            "WebSockets",
        ],
    },
    {
        title: "Tooling",
        skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
    },
    {
        title: "Practice",
        skills: [
            "System Design",
            "Testing",
            "Code Review",
            "Technical Writing",
        ],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 border-t border-white/[0.06]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-14"
                    >
                        <p className="font-mono-tag text-sm text-muted-foreground mb-3">
                            // skills
                        </p>
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            Tools I reach for
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-md overflow-hidden">
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.06 }}
                                className="p-6 bg-background"
                            >
                                <h3 className="text-sm font-semibold mb-4 text-muted-foreground">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="font-mono-tag px-2.5 py-1 rounded border border-white/10 text-xs text-foreground/90"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
