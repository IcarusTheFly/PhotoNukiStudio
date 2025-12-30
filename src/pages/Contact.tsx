import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import mapImage from '../assets/map.png';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSent(false), 5000); // Hide popup after 5s
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-primary min-h-screen py-20 relative overflow-hidden">
            {/* Success Popup */}
            <AnimatePresence>
                {isSent && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: -50, x: "-50%" }}
                        className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3"
                    >
                        <CheckCircle className="w-6 h-6" />
                        <span className="font-bold">Message sent successfully!</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-white mb-6"
                    >
                        Get In Touch
                    </motion.h1>
                    <p className="text-gray-400 text-lg">We'd love to hear from you. Let's create something beautiful together.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Our Studio</h4>
                                        <p className="text-gray-400">123 Flinders Lane<br />Melbourne, VIC 3000</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Email</h4>
                                        <p className="text-gray-400">hello@photonukistudio.space</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-64 rounded-2xl overflow-hidden bg-gray-800 relative">
                            <img src={mapImage} className="w-full h-full object-cover" alt="Map Location" />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-500 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-500 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-500 transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-secondary hover:bg-blue-600 text-white font-bold rounded-lg transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message <Send className="ml-2 w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
