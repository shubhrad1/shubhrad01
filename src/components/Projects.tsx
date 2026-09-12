import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Dashboard",
        description:
            "Analytics dashboard for online retailers — real-time data visualization, inventory management, and sales reporting.",
        tags: ["React", "TypeScript", "D3.js", "Supabase"],
        links: { demo: "#", code: "#" },
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    },
    {
        title: "Task Collaboration Platform",
        description:
            "Real-time project management tool for teams to organize workflows, assign tasks, and communicate.",
        tags: ["Next.js", "Socket.io", "Prisma", "Tailwind"],
        links: { demo: "#", code: "#" },
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=60",
    },
    {
        title: "AI Content Generator",
        description:
            "SaaS application using OpenAI's API to help marketers draft blog posts, captions, and email copy.",
        tags: ["OpenAI API", "React", "Stripe", "Node.js"],
        links: { demo: "#", code: "#" },
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full neu-inset mb-4"
                    >
                        <span className="font-mono-tag text-sm text-muted-foreground">
                            // projects
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-2xl md:text-3xl font-semibold"
                    >
                        Selected work
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} index={idx} />
                    ))}
                </div>

                <div className="mt-14">
                    <a
                        href="https://github.com/shubhrad1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl neu-raised-sm neu-pressable text-sm font-medium text-foreground"
                    >
                        <Github className="w-4 h-4" /> All projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group p-4 rounded-3xl neu-raised flex flex-col h-full"
        >
            <div className="relative h-40 rounded-2xl overflow-hidden neu-inset-lg p-1.5">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-3.5 right-3.5 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <a
                        href={project.links.code}
                        className="w-8 h-8 rounded-full neu-raised-sm flex items-center justify-center text-foreground"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        href={project.links.demo}
                        className="w-8 h-8 rounded-full neu-raised-sm flex items-center justify-center text-foreground"
                    >
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-semibold mb-2">
                    {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="font-mono-tag px-2.5 py-1 text-xs rounded-lg neu-inset text-muted-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
