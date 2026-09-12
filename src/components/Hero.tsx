import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-scroll";

export function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-dot-grid"
        >
            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-7"
                >
                    <p className="font-mono-tag text-sm text-muted-foreground">
                        <span className="text-primary">$</span> whoami
                    </p>

                    <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1]">
                        Shubhra Das
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                        Software Engineer building web applications end to end —
                        from data models and APIs to the interfaces people
                        actually use.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                        {["React", "TypeScript", "Node.js", "PostgreSQL"].map(
                            (tech) => (
                                <span
                                    key={tech}
                                    className="font-mono-tag text-xs px-3 py-1.5 border border-white/10 text-muted-foreground rounded"
                                >
                                    {tech}
                                </span>
                            ),
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-6 py-3 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                            View work <ArrowRight className="w-4 h-4" />
                        </Link>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-6 py-3 rounded-md border border-white/10 text-foreground font-medium hover:border-white/25 transition-colors flex items-center justify-center cursor-pointer"
                        >
                            Get in touch
                        </Link>
                    </div>

                    <div className="flex items-center gap-5 pt-6">
                        <SocialLink
                            href="https://github.com/shubhrad1"
                            icon={<Github className="w-5 h-5" />}
                        />
                        <SocialLink
                            href="https://linkedin.com/in/shubhradeepdas"
                            icon={<Linkedin className="w-5 h-5" />}
                        />
                        <SocialLink
                            href="https://twitter.com/shubhrad1"
                            icon={<Twitter className="w-5 h-5" />}
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="relative flex justify-center md:justify-end"
                >
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-md overflow-hidden border border-white/10">
                        <img
                            src="/Hero.png"
                            alt="Shubhra Das"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
        >
            {icon}
        </a>
    );
}
