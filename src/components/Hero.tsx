import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-scroll";
// Component inspired by github.com/zavalit/bayer-dithering-webgl-demo

import PixelBlast from "./PixelBlast";

export function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            <div className="absolute inset-0 z-0 pointer-events-none">
                <PixelBlast
                    variant="circle"
                    pixelSize={5}
                    color="#f2ad5f"
                    patternScale={5.5}
                    patternDensity={0.6}
                    pixelSizeJitter={0.35}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid={false}
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={1.3}
                    edgeFade={0.34}
                    transparent
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-7"
                >
                    <div className="inline-block px-4 py-2 rounded-full neu-inset">
                        <span className="font-mono-tag text-sm text-muted-foreground">
                            <span className="text-primary">$</span> whoami
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1]">
                        Shubhra Das
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                        Software Engineer building web applications end to end —
                        from data models and APIs to the interfaces people
                        actually use.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-1">
                        {["React", "TypeScript", "Node.js", "PostgreSQL"].map(
                            (tech) => (
                                <span
                                    key={tech}
                                    className="font-mono-tag text-xs px-3 py-2 rounded-xl neu-inset text-muted-foreground"
                                >
                                    {tech}
                                </span>
                            ),
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-7 py-3.5 rounded-2xl neu-raised-sm neu-pressable text-foreground font-medium flex items-center justify-center gap-2 cursor-pointer"
                        >
                            View work <ArrowRight className="w-4 h-4" />
                        </Link>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-7 py-3.5 rounded-2xl neu-inset neu-pressable text-foreground font-medium flex items-center justify-center cursor-pointer"
                        >
                            Get in touch
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 pt-6">
                        <SocialLink
                            href="https://github.com/shubhrad1"
                            icon={<Github className="w-4 h-4" />}
                        />
                        <SocialLink
                            href="https://linkedin.com/in/shubhradeepdas"
                            icon={<Linkedin className="w-4 h-4" />}
                        />
                        <SocialLink
                            href="https://twitter.com/shubhrad1"
                            icon={<Twitter className="w-4 h-4" />}
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
            className="w-11 h-11 rounded-full neu-raised-sm neu-pressable-sm flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
        >
            {icon}
        </a>
    );
}
