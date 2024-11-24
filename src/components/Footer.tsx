import React from 'react';

// images
import logo from '../../public/weather_icons/11_heavy_rain_color_w96.webp';

const Footer: React.FC = () => {
    return (
        <footer className="text-white py-8 font-poppins">
            <div className="container mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <img src={logo} alt="logo" width={24} />
                    <h1 className="text-2xl font-bold">SkyCast</h1>
                </div>
                <p className="text-sm mb-2" role="contentinfo" aria-label="Footer information">
                    &copy; {new Date().getFullYear()} SkyCast. All rights reserved.
                </p>
                <nav aria-label="Footer navigation">
                    <ul className="flex justify-center space-x-4">
                        <li>
                            <a href="/about" className="text-gray-400 hover:text-white" aria-label="About Us">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-gray-400 hover:text-white" aria-label="Contact Us">Contact</a>
                        </li>
                        <li>
                            <a href="/privacy" className="text-gray-400 hover:text-white" aria-label="Privacy Policy">Privacy Policy</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
