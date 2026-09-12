import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Loader2 } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form as HTMLFormElement);
        setLoading(true);
        try {
            await fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(data as any).toString(),
            });
            toast({
                title: "Message sent",
                description:
                    "Thanks for reaching out — I'll get back to you soon.",
            });
        } catch (err) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again later.",
                variant: "destructive",
            });
        }
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
    };
    return (
        <>
            <AnimatePresence>
                {loading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="p-8 rounded-3xl neu-raised flex flex-col items-center gap-4"
                        >
                            <Loader2 className="w-6 h-6 animate-spin text-primary" />
                            <p className="text-foreground font-medium text-sm">
                                Sending message...
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <section id="contact" className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mb-14">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 rounded-full neu-inset mb-4"
                        >
                            <span className="font-mono-tag text-sm text-muted-foreground">
                                // contact
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 }}
                            className="text-2xl md:text-3xl font-semibold mb-4"
                        >
                            Get in touch
                        </motion.h2>
                        <p className="text-muted-foreground">
                            Questions about my work, or an opportunity worth
                            discussing — I read every message.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-6 rounded-3xl neu-raised">
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-2xl neu-inset flex items-center justify-center shrink-0 text-primary">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-muted-foreground mb-1">
                                            Email
                                        </p>
                                        <a
                                            href="mailto:hello@shubhrad1.com"
                                            className="text-foreground hover:text-primary transition-colors text-base font-medium"
                                        >
                                            hello@shubhrad1.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-3xl neu-raised"
                        >
                            <form
                                name="contact"
                                className="space-y-5"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                data-netlify-recaptcha="true"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    type="hidden"
                                    name="form-name"
                                    value="contact"
                                />

                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium"
                                    >
                                        Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="neu-inset border-0 h-12 rounded-2xl focus-visible:ring-primary/40"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium"
                                    >
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="neu-inset border-0 h-12 rounded-2xl focus-visible:ring-primary/40"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium"
                                    >
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="What's on your mind?"
                                        className="neu-inset border-0 min-h-[130px] rounded-2xl resize-none focus-visible:ring-primary/40"
                                        required
                                    />
                                </div>

                                <input type="hidden" name="bot-field" />
                                <div data-netlify-recaptcha="true"></div>

                                <button
                                    type="submit"
                                    className="w-full py-3.5 rounded-2xl neu-raised-sm neu-pressable font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    Send message
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
