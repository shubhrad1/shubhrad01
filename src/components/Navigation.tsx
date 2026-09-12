import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const navLinks = [
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
];

const navLinkPages = [
    { name: "Blog", to: "/blogs" },
    { name: "Resume", to: "/resume" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled ? "py-4 glass" : "py-6 bg-transparent"
                }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                        className="font-mono-tag text-lg font-medium cursor-pointer text-foreground hover:text-primary transition-colors"
                    >
                        sd<span className="text-primary">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        {navLinkPages.map((link) => (
                            <a
                                key={link.name}
                                href={link.to}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-4 py-2 rounded-md border border-white/10 text-foreground hover:border-white/30 transition-colors font-medium text-sm cursor-pointer"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={22} />
                        ) : (
                            <Menu size={22} />
                        )}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl md:hidden flex flex-col justify-center items-center space-y-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-display font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        ))}
                        {navLinkPages.map((link) => (
                            <a
                                key={link.name}
                                href={link.to}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-display font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
