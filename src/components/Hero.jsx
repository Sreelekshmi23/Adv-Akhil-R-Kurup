import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import advocateImg from '../assets/advocate.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-24 md:pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gold/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gold/10 blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <h2 className="text-gold tracking-[0.2em] text-xs sm:text-sm md:text-base font-semibold uppercase mb-2 md:mb-4">
              Legal Excellence & Integrity
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-4 sm:mb-6 tracking-tight leading-tight md:leading-tight px-2 lg:px-0">
              Adv. Akhil R Kurup
            </h1>
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 font-light leading-relaxed px-4 lg:px-0">
              Providing dedicated and strategic legal representation across Pathanamthitta and Kerala. Committed to securing justice with professionalism and expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-4 w-full px-4 lg:px-0">
              <a 
                href="#contact"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-medium text-royal-900 bg-gold rounded-sm overflow-hidden transition-all duration-300 hover:bg-gold-light flex-1 sm:flex-none"
              >
                <span>Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#about"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-medium text-white border border-gray-600 rounded-sm hover:border-gold hover:text-gold transition-colors duration-300 flex-1 sm:flex-none"
              >
                About
              </a>
              <a 
                href="#services"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-medium text-white border border-gray-600 rounded-sm hover:border-gold hover:text-gold transition-colors duration-300 flex-1 sm:flex-none"
              >
                Area of Expertise
              </a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end pt-8 md:pt-0 w-full"
          >
            <div className="w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[480px] lg:h-[480px] bg-royal-800 border-4 border-gold/30 rounded-full relative overflow-hidden group shadow-[0_0_40px_rgba(212,175,55,0.15)] flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-royal-900/20 to-transparent z-10 pointer-events-none"></div>
              <img 
                src={advocateImg} 
                alt="Adv. Akhil R Kurup" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
