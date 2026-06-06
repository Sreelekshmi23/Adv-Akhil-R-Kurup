import React from 'react';
import { Scale } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-royal-900 border-t border-royal-700/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center space-x-2 mb-8 md:mb-0 justify-center">
            <Scale className="h-6 w-6 md:h-8 md:w-8 text-gold" />
            <span className="font-serif text-lg md:text-xl font-bold text-white tracking-wider">ADV AKHIL R KURUP</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#home" className="text-gray-400 hover:text-gold transition-colors text-xs md:text-sm uppercase tracking-wider">Home</a>
            <a href="#about" className="text-gray-400 hover:text-gold transition-colors text-xs md:text-sm uppercase tracking-wider">About</a>
            <a href="#services" className="text-gray-400 hover:text-gold transition-colors text-xs md:text-sm uppercase tracking-wider">Services</a>
            <a href="#contact" className="text-gray-400 hover:text-gold transition-colors text-xs md:text-sm uppercase tracking-wider">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-royal-700/50 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500 text-xs md:text-sm font-light mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Adv. Akhil R Kurup. All rights reserved.
          </p>
          <div className="text-gray-500 text-xs md:text-sm font-light md:text-right">
            <p>Designed for Professional Excellence.</p>
            <p className="mt-1">
              Developed by <a href="https://fennechron.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">fennechron.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
