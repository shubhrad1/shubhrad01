import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-10 border-t border-white/[0.06]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-muted-foreground text-sm font-mono-tag">
                        © {currentYear} Shubhra Das
                    </p>

                    <div className="flex items-center gap-5">
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
                </div>
            </div>
        </footer>
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
