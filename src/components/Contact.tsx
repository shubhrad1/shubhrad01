import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Get in{" "}
                        <span className="text-gradient-primary">Touch</span>
                    </motion.h2>
                    <p className="text-muted-foreground">
                        Have a project in mind or just want to say hello? I'd
                        love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-card/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl space-y-6 hover:border-primary/30 transition-colors duration-300">
                            <h3 className="text-xl font-bold mb-4">
                                Contact Information
                            </h3>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground mb-1">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:hello@shubhrad1.com"
                                        className="text-white hover:text-primary transition-colors text-lg font-medium"
                                    >
                                        hello@shubhrad1.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground mb-1">
                                        Location
                                    </p>
                                    <p className="text-white text-lg font-medium">
                                        San Francisco, CA
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-900/20 border border-primary/20">
                            <h4 className="text-lg font-bold mb-2">
                                Let's build something amazing
                            </h4>
                            <p className="text-white/70 text-sm mb-6">
                                I'm currently available for freelance projects
                                and full-time opportunities.
                            </p>
                            <div className="flex gap-2">
                                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30">
                                    Available Now
                                </div>
                                <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/30">
                                    Remote OK
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-2xl border border-white/5 shadow-xl shadow-black/20"
                    >
                        <form
                            className="space-y-6"
                            data-netlify="true"
                            data-netlify-recaptcha="true"
                            method="POST"
                        >
                            <div data-netlify-recaptcha="true"></div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium ml-1"
                                >
                                    Name
                                </label>
                                <Input
                                    placeholder="John Doe"
                                    className="bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium ml-1"
                                >
                                    Email
                                </label>
                                <Input
                                    placeholder="john@example.com"
                                    className="bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium ml-1"
                                >
                                    Message
                                </label>
                                <Textarea
                                    placeholder="Tell me about your project..."
                                    className="bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 min-h-[150px] rounded-xl resize-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
