import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaGooglePlus, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { icon: FaFacebook, label: 'Facebook' },
        { icon: FaTwitter, label: 'Twitter' },
        { icon: FaLinkedin, label: 'LinkedIn' },
        { icon: FaYoutube, label: 'YouTube' },
        { icon: FaGooglePlus, label: 'Google+' },
        { icon: FaPinterest, label: 'Pinterest' }
    ];

    const menuLinks = [
        { label: 'About', href: '#' },
        { label: 'Terms of Use', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Mobile App', href: '#' },
        { label: 'PressKit', href: '#' }
    ];

    return (
        <footer className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6">
                {/* Social Links */}
                <div className="mb-12 text-center pb-12 border-b border-gray-300">
                    <ul className="flex justify-center gap-6">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center w-15 h-15 rounded-full bg-blue-300 text-white hover:bg-gray-600 transition"
                                        aria-label={social.label}
                                    >
                                        <Icon className="text-3xl" />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Menu Links & Copyright */}
                <div className="pt-8">
                    <div className="text-center mb-6">
                        <ul className="flex justify-center gap-6 flex-wrap">
                            {menuLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-blue-300 hover:text-gray-400 transition text-lg"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center text-gray-400 text-base">
                        <p>Copyright © 2016. Proland. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
