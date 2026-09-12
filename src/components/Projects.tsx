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
        <section id="projects" className="py-24 border-t border-white/[0.06]">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-mono-tag text-sm text-muted-foreground mb-3"
                    >
                        // projects
                    </motion.p>
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} index={idx} />
                    ))}
                </div>

                <div className="mt-14">
                    <a
                        href="https://github.com/shubhrad1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
            className="group rounded-md overflow-hidden bg-card border border-white/[0.08] hover:border-white/20 transition-colors flex flex-col h-full"
        >
            <div className="relative h-44 overflow-hidden border-b border-white/[0.08]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <a
                        href={project.links.code}
                        className="p-2 bg-background/90 border border-white/10 rounded text-foreground hover:border-white/30 transition-colors"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        href={project.links.demo}
                        className="p-2 bg-background/90 border border-white/10 rounded text-foreground hover:border-white/30 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
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
                            className="font-mono-tag px-2 py-1 text-xs rounded border border-white/10 text-muted-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
