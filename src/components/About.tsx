import { motion } from "framer-motion";
import { Code, Layout, Server, Database } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      title: "Frontend Development",
      desc: "Building responsive, accessible, and performant user interfaces with React, Next.js, and Tailwind CSS."
    },
    {
      icon: <Server className="w-6 h-6 text-purple-400" />,
      title: "Backend Systems",
      desc: "Architecting robust APIs and server-side logic using Node.js, Express, and modern serverless solutions."
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: "Database Design",
      desc: "Designing efficient data schemas and managing state with PostgreSQL, MongoDB, and Redis."
    },
    {
      icon: <Code className="w-6 h-6 text-pink-400" />,
      title: "Clean Code",
      desc: "Writing maintainable, scalable, and self-documenting code with TypeScript and modern best practices."
    }
  ];

  return (
    <section id="about" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Bridging the gap between <span className="text-white/60">design</span> and <span className="text-white/60">engineering</span>.
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey began with a curiosity for how things work on the web, which quickly turned into a passion for building them. I thrive on solving complex problems and turning ideas into reality through code.
                </p>
                <p>
                  With a strong foundation in both design principles and engineering practices, I aim to create digital products that look beautiful and perform flawlessly. I'm constantly learning new technologies to stay at the forefront of the rapidly evolving tech landscape.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing my knowledge with the developer community.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-card/30 border border-white/5 hover:bg-card/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
