
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="bg-primary min-h-screen py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 -skew-x-12 transform origin-top-right"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform origin-bottom-left"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Investments</h1>
                    <p className="text-gray-400">Choose the package that perfectly fits your needs.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PricingCard
                        title="Portrait"
                        price="$250"
                        features={["1 Hour Session", "5 Retouched Photos", "Online Gallery", "Print Rights"]}
                        delay={0}
                    />
                    <PricingCard
                        title="Event"
                        price="$800"
                        features={["4 Hour Coverage", "All High-Res Images", "Online Gallery", "Sneak Peek within 24hr"]}
                        isPopular
                        delay={0.2}
                    />
                    <PricingCard
                        title="Commercial"
                        price="$1200"
                        features={["Full Day shoot", "Product & Lifestyle", "Commercial Usage Rights", "Priority Editing"]}
                        delay={0.4}
                    />
                </div>

                <div className="mt-20 text-center">
                    <h3 className="text-2xl text-white font-bold mb-6">Need a custom package?</h3>
                    <Link to="/contact" className="inline-block px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">
                        Contact Us for a Quote
                    </Link>
                </div>
            </div>
        </div>
    );
};

const PricingCard = ({ title, price, features, isPopular = false, delay }: { title: string, price: string, features: string[], isPopular?: boolean, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className={`relative p-8 rounded-2xl border ${isPopular ? 'bg-blue-900/30 border-accent' : 'bg-white/5 border-white/10'} backdrop-blur-sm`}
    >
        {isPopular && (
            <div className="absolute top-0 right-0 bg-accent text-primary font-bold text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
            </div>
        )}
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="text-4xl font-bold text-accent mb-6">{price}</div>
        <ul className="space-y-4 mb-8">
            {features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    {feature}
                </li>
            ))}
        </ul>
        <Link to="/contact" className={`block w-full py-3 rounded-xl text-center font-bold transition-all ${isPopular
            ? 'bg-accent text-primary hover:bg-yellow-300'
            : 'bg-white/10 text-white hover:bg-white/20'
            }`}>
            Book Now
        </Link>
    </motion.div>
);

export default Services;
