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
        <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/30">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 origin-left z-50"
                style={{ scaleX }}
            />

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
