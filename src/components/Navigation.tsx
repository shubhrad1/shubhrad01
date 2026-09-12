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
                    isScrolled ? "py-3 neu-flat" : "py-6 bg-transparent"
                }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                        className="w-10 h-10 rounded-2xl neu-raised-sm flex items-center justify-center font-mono-tag text-sm font-medium cursor-pointer text-foreground"
                    >
                        sd<span className="text-primary">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-2 p-1.5 rounded-2xl neu-inset">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="neu-raised-sm text-foreground"
                                className="px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        {navLinkPages.map((link) => (
                            <a
                                key={link.name}
                                href={link.to}
                                className="px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-5 py-2.5 rounded-2xl neu-raised-sm neu-pressable-sm text-foreground font-medium text-sm cursor-pointer"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden w-10 h-10 rounded-2xl neu-raised-sm neu-pressable-sm flex items-center justify-center text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
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
                        className="fixed inset-0 z-40 bg-background md:hidden flex flex-col justify-center items-center gap-5"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-8 py-4 rounded-2xl neu-raised text-xl font-display font-medium text-foreground cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        ))}
                        {navLinkPages.map((link) => (
                            <a
                                key={link.name}
                                href={link.to}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-8 py-4 rounded-2xl neu-raised text-xl font-display font-medium text-foreground cursor-pointer"
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
