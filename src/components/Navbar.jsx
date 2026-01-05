import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-transparent py-5 md:py-5 shadow-none transition-all duration-300">
            <nav className="container mx-auto flex items-center justify-between py-5 px-2">

                {/* Logo */}
                <a href="#header">
                    <img src="/images/logo.png" alt="Logo" className="h-10" />
                </a>

                {/* Menu Desktop */}
                <ul className="hidden md:flex space-x-10 text-gray-400 text-lg ">
                    <li><a href="#product" className="hover:text-blue-500">PRODUCT</a></li>
                    <li><a href="#features" className="hover:text-blue-500">FEATURES</a></li>
                    <li><a href="#reviews" className="hover:text-blue-500">REVIEWS</a></li>

                    {/* Dropdown "PAGES" */}
                    <li className="relative">
                        <a href="#" className="hover:text-blue-500">PAGES</a>
                        <ul className={`absolute ${isMenuOpen ? 'block' : 'hidden'} bg-white text-gray-700 shadow-lg mt-2 rounded-md w-48`}>
                            {/* Same list items here */}
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index.html#" className="block px-4 py-2 hover:bg-gray-100">Pre-order (Email)</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index_email.html" className="block px-4 py-2 hover:bg-gray-100">Email Signup (Mailchimp)</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index_buy_paypal.html" className="block px-4 py-2 hover:bg-gray-100">Buy Now (PayPal)</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index_kickstarter.html" className="block px-4 py-2 hover:bg-gray-100">Kickstarter Campaign</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index_indegogo.html" className="block px-4 py-2 hover:bg-gray-100">Indegogo Campaign</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index_boxed.html" className="block px-4 py-2 hover:bg-gray-100">Boxed Version</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index_rtl.html" className="block px-4 py-2 hover:bg-gray-100">RTL Version</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/index_video.html" className="block px-4 py-2 hover:bg-gray-100">Video Background</a></li>
                            <li className="border-t border-gray-300"></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/blog.html" className="block px-4 py-2 hover:bg-gray-100">Blog</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/blog-single.html" className="block px-4 py-2 hover:bg-gray-100">Blog Single</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/about.html" className="block px-4 py-2 hover:bg-gray-100">About Us</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/faq.html" className="block px-4 py-2 hover:bg-gray-100">FAQ</a></li>
                            <li><a href="https://demo.web3canvas.com/themeforest/proland/shortcodes.html" className="block px-4 py-2 hover:bg-gray-100">Shortcodes</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact" className="hover:text-blue-500">CONTACT</a></li>
                </ul>

                {/* Call to Action */}
                <a id="product-choose" href="#product-choose" className="hidden md:block bg-orange-500 text-white font-size-xl px-12 py-3 rounded-full hover:bg-gray-600 transition duration-300">
                    PRE-ORDER NOW
                </a>

                {/* Burger menu mobile */}
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <img id="menu-icon" src="/images/menu-icon.png" alt="Menu Icon" className="mt-0" />
                </button>
            </nav>
        </header>
    );
}
