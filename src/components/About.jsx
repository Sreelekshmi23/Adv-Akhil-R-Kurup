import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-royal-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-gold tracking-widest text-sm font-semibold uppercase mb-3">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-8">Dedicated to protecting your rights and interests</h3>
            
            <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg lg:px-8">
              <p>
                As an advocate based in Kerala, I am committed to providing exceptional legal counsel and representation to my clients. With a deep understanding of the legal landscape and a strategic approach to problem-solving, I strive to achieve the best possible outcomes in every case.
              </p>
              <p>
                Operating primarily out of Pathanamthitta and Chengannur, my practice encompasses a wide range of legal matters. I believe in maintaining clear communication, uncompromising integrity, and a relentless pursuit of justice for those I represent.
              </p>
              <p>
                Whether you are facing complex litigation or require sound legal advice, you can trust in my dedication to serve as your staunch advocate.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
