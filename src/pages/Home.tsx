import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/25">
            {/* Scroll Progress — inset groove with a filled amber track */}
            <div className="fixed top-0 left-0 right-0 h-1 neu-inset z-50">
                <motion.div
                    className="h-full bg-primary origin-left rounded-r-full"
                    style={{ scaleX }}
                />
            </div>

            <Navigation />

            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}
