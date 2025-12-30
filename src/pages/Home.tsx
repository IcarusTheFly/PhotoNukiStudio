
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-primary overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Studio Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                            Capturing <span className="text-accent italic">Soul</span> in Every Shot
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
                            Melbourne's premier photography studio for those who demand excellence.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-3 bg-secondary text-white font-bold rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
                        >
                            Book a Session <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Works - Diagonal Cut Top */}
            <section className="relative py-20 bg-gray-900">
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-full fill-primary">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-white mb-4"
                        >
                            Featured Works
                        </motion.h2>
                        <div className="w-24 h-1 bg-accent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        ].map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group relative overflow-hidden rounded-xl aspect-[3/4]"
                            >
                                <img src={src} alt={`Portfolio ${index}`} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-accent font-bold text-xl">View Project</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/portfolio" className="text-white border-b-2 border-accent hover:text-accent transition-colors pb-1">See Full Portfolio</Link>
                    </div>
                </div>
            </section>

            {/* Services Preview - Diagonal Bottom */}
            <section className="relative py-24 bg-primary">
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-full fill-gray-900">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <ServiceCard
                            icon={<Camera className="w-10 h-10 text-primary" />}
                            title="Studio Shoots"
                            desc="Professional lighting and high-end equipment for perfect portraits."
                        />
                        <ServiceCard
                            icon={<Users className="w-10 h-10 text-primary" />}
                            title="Events"
                            desc="Capturing the atmosphere and emotion of your special occasions."
                        />
                        <ServiceCard
                            icon={<Star className="w-10 h-10 text-primary" />}
                            title="Fashion"
                            desc="Editorial style photography for brands and models."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const ServiceCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors border border-white/5"
    >
        <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 transform rotate-3">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400">{desc}</p>
    </motion.div>
);

export default Home;
