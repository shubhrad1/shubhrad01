import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Drizzle ORM", "REST APIs", "WebSockets"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Vercel", "Linux"]
  },
  {
    title: "Design & Others",
    skills: ["UI/UX Design", "Figma", "Python", "Problem Solving", "Agile", "Technical Writing"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-gradient-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through years of building and scaling digital products.
              I focus on creating maintainable, high-performance applications using modern technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-primary rounded-full" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
