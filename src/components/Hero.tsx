import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-scroll";

export function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-30 animate-pulse delay-700" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                        <span className="text-primary text-sm font-medium tracking-wide">
                            AVAILABLE FOR WORK
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        I craft digital <br />
                        <span className="text-gradient-primary">
                            experiences.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                        Hi, I'm Shubhra. A passionate Full Stack Developer
                        focused on building accessible, pixel-perfect, and
                        performant web applications.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-1"
                        >
                            View My Work <ArrowRight className="w-4 h-4" />
                        </Link>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center cursor-pointer hover:-translate-y-1"
                        >
                            Contact Me
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 pt-8">
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
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center md:justify-end"
                >
                    <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]">
                        {/* Glowing ring behind image */}
                        <div className="absolute inset-0 rounded-full border-2 border-primary/30 rotate-12 scale-105" />
                        <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 -rotate-6 scale-110" />

                        {/* Image Container */}
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl shadow-primary/20 relative z-10">
                            {/* Using a placeholder as requested, easily swappable */}
                            {/* User Image Placeholder */}
                            <img
                                src="/Hero.png"
                                alt="Shubhra"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-8 -left-4 md:-left-8 bg-card/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground font-medium">
                                    Status
                                </p>
                                <p className="text-sm font-bold text-white">
                                    Open to Work
                                </p>
                            </div>
                        </motion.div>
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
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/5 hover:border-primary/50 transition-all duration-300"
        >
            {icon}
        </a>
    );
}
