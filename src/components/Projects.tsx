import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization, inventory management, and sales reporting.",
    tags: ["React", "TypeScript", "D3.js", "Supabase"],
    links: { demo: "#", code: "#" },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Task Collaboration Platform",
    description: "Real-time project management tool allowing teams to organize workflows, assign tasks, and communicate seamlessly.",
    tags: ["Next.js", "Socket.io", "Prisma", "Tailwind"],
    links: { demo: "#", code: "#" },
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "AI Content Generator",
    description: "SaaS application leveraging OpenAI's API to help marketers generate blog posts, social media captions, and email copy.",
    tags: ["OpenAI API", "React", "Stripe", "Node.js"],
    links: { demo: "#", code: "#" },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured <span className="text-gradient-primary">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            A selection of my recent work building scalable web applications.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/shubhrad1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 text-sm font-medium"
          >
            <Github className="w-4 h-4" /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        {/* Project Thumbnail */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={project.links.code} className="p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-primary text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href={project.links.demo} className="p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-primary text-white transition-colors">
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/70 border border-white/5 group-hover:border-primary/20 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
