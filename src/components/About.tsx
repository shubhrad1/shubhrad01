import { motion } from "framer-motion";
import { Code, Layout, Server, Database } from "lucide-react";

export function About() {
    const features = [
        {
            icon: <Layout className="w-5 h-5" />,
            title: "Frontend",
            desc: "Building responsive, accessible interfaces with React, Next.js, and Tailwind CSS.",
        },
        {
            icon: <Server className="w-5 h-5" />,
            title: "Backend",
            desc: "Designing APIs and server-side systems with Node.js, Express, and serverless infrastructure.",
        },
        {
            icon: <Database className="w-5 h-5" />,
            title: "Data",
            desc: "Modeling and managing data with PostgreSQL, MongoDB, and Redis.",
        },
        {
            icon: <Code className="w-5 h-5" />,
            title: "Code quality",
            desc: "Writing maintainable, well-tested TypeScript with clear ownership boundaries.",
        },
    ];

    return (
        <section id="about" className="py-24 border-t border-white/[0.06]">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-5"
                    >
                        <p className="font-mono-tag text-sm text-muted-foreground">
                            // about
                        </p>
                        <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                            I work across the stack, with a bias toward simple,
                            direct solutions.
                        </h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Most of my work sits at the intersection of
                                product and engineering — turning a requirement
                                into a system, then making sure that system is
                                easy for the next person to reason about.
                            </p>
                            <p>
                                I care about correctness and clarity more than
                                cleverness, and I try to leave code in a better
                                state than I found it.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-md overflow-hidden">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: idx * 0.06,
                                }}
                                className="p-6 bg-background hover:bg-white/[0.02] transition-colors"
                            >
                                <div className="text-primary mb-4">
                                    {feature.icon}
                                </div>
                                <h4 className="text-base font-semibold mb-2">
                                    {feature.title}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
