
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-darkBg-light">
      {/* Collaboration Banner */}
      <div className="bg-gradient-to-r from-green-800 to-green-900 py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-lg mb-2">Need a successful national-level project?</p>
          <p className="text-white text-2xl font-bold mb-4">Let's Collaborate Together</p>
          <Link to="/contact" className="inline-block bg-darkBg text-white font-medium px-6 py-3 rounded-md hover:bg-orange transition-colors duration-300">
            Connect with Us
          </Link>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange transition-colors duration-300">
              <Youtube size={24} />
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            © 2024. All rights reserved by NeGD under MeitY, Government of India.
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-center space-x-4 text-sm text-gray-400">
          <Link to="/contact" className="hover:text-orange transition-colors duration-300">Contact Us</Link>
          <Link to="/privacy" className="hover:text-orange transition-colors duration-300">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-orange transition-colors duration-300">Terms of Use</Link>
          <Link to="/website-policy" className="hover:text-orange transition-colors duration-300">Website Policy</Link>
        </div>
      </div>

      {/* Floating Navigation Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-orange text-white p-3 rounded-full shadow-lg hover:bg-orange-dark transition-colors duration-300"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
