import { motion } from 'framer-motion';
import { Camera, Heart, Award } from 'lucide-react';
import studioImage from '../assets/studio.png';

const About = () => {
    return (
        <div className="bg-primary min-h-screen pt-20 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-20 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-white mb-6"
                    >
                        About The Studio
                    </motion.h1>
                    <div className="w-32 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-3 border-2 border-accent rounded-2xl"
                    >
                        <img
                            src={studioImage}
                            alt="Our Studio"
                            className="relative rounded-xl shadow-2xl w-full"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Where Art Meets Passion</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Founded in 2020, PhotoNukiStudio started as a small passion project in a Melbourne garage. Today, we are proud to be one of the city's most sought-after creative studios.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            Our philosophy is simple: every photo should tell a story. We don't just capture images; we capture feelings, atmospheres, and split-second moments that last a lifetime.
                        </p>

                        <div className="grid grid-cols-3 gap-6">
                            <StatItem number="500+" label="Shoots" />
                            <StatItem number="50+" label="Awards" />
                            <StatItem number="3k+" label="Happy Clients" />
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ValueCard
                        icon={<Camera className="w-8 h-8 text-primary" />}
                        title="Excellence"
                        desc="We use state-of-the-art equipment and techniques to ensure every shot is perfect."
                    />
                    <ValueCard
                        icon={<Heart className="w-8 h-8 text-primary" />}
                        title="Passion"
                        desc="We love what we do, and that energy reflects in every session we host."
                    />
                    <ValueCard
                        icon={<Award className="w-8 h-8 text-primary" />}
                        title="Quality"
                        desc="From shooting to editing, we maintain the highest standards of quality."
                    />
                </div>
            </div>
        </div>
    );
};

const StatItem = ({ number, label }: { number: string, label: string }) => (
    <div className="text-center">
        <div className="text-3xl font-bold text-accent mb-1">{number}</div>
        <div className="text-sm text-gray-400 uppercase tracking-wider">{label}</div>
    </div>
);

const ValueCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white/5 p-8 rounded-xl border border-white/5 text-center"
    >
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{desc}</p>
    </motion.div>
);

export default About;
