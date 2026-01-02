
import { Link } from 'react-router-dom';
import { Camera, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
            {/* Diagonal Top Border for cool effect if needed, but keeping it simple for now as requested "classic wordpress style" but with style */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: About */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center transform -rotate-3">
                                <Camera className="text-primary w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold text-white">
                                Photo<span className="text-accent">Nuki</span>Studio
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Capturing life's most precious moments with style and elegance in the heart of Melbourne.
                            We specialize in portrait, commercial, and event photography.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink icon={<Instagram size={20} />} href="#" />
                            <SocialLink icon={<Facebook size={20} />} href="#" />
                            <SocialLink icon={<Twitter size={20} />} href="#" />
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
                        </h3>
                        <ul className="space-y-3">
                            <FooterLink to="/" label="Home" />
                            <FooterLink to="/portfolio" label="Portfolio" />
                            <FooterLink to="/services" label="Services" />
                            <FooterLink to="/about" label="About Us" />
                            <FooterLink to="/contact" label="Contact" />
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Find Us
                            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <span>123 Flinders Lane,<br />Melbourne VIC 3000,<br />Australia</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>hello@photonukistudio.space</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} PhotoNukiStudio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
    <a href={href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-primary transition-all duration-300">
        {icon}
    </a>
);

const FooterLink = ({ to, label }: { to: string, label: string }) => (
    <li>
        <Link
            to={to}
            className="text-gray-400 hover:text-accent transition-colors flex items-center"
            onClick={() => window.scrollTo(0, 0)}
        >
            <span className="mr-2">›</span> {label}
        </Link>
    </li>
);

export default Footer;
