import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold font-display mb-2">SD<span className="text-primary">.</span></h2>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Shubhra. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <SocialLink href="https://github.com/shubhrad1" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="https://twitter.com" icon={<Twitter className="w-5 h-5" />} />
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using React, Tailwind & Framer Motion
          </p>
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
      className="text-muted-foreground hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
    >
      {icon}
    </a>
  );
}
