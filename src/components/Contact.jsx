import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Clock, Briefcase } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-24 bg-royal-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gold tracking-widest text-sm font-semibold uppercase mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white">Contact Information</h3>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-6"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Office Address */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-6 sm:p-8 md:p-10 rounded-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-[50px] pointer-events-none transition-all duration-500 group-hover:bg-gold/10"></div>
            
            <h4 className="text-2xl font-serif text-white mb-8 flex items-center">
              <Briefcase className="h-6 w-6 text-gold mr-3" />
              Office Chamber
            </h4>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium mb-1">Adv. Akhil R Kurup</p>
                  <p className="text-gray-400 font-light">Maheshwari Building</p>
                  <p className="text-gray-400 font-light">Near Aiswarya Theatre</p>
                  <p className="text-gray-400 font-light">Pathanamthitta, Kerala</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium mb-1">Consultation Hours</p>
                  <p className="text-gray-400 font-light">By Appointment</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Residence/Mailing Address */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 md:p-10 rounded-sm relative overflow-hidden group"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-[50px] pointer-events-none transition-all duration-500 group-hover:bg-gold/10"></div>
            
            <h4 className="text-2xl font-serif text-white mb-8 flex items-center">
              <MapPin className="h-6 w-6 text-gold mr-3" />
              Residence & Mailing
            </h4>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium mb-1">Adv. Akhil R Kurup</p>
                  <p className="text-gray-400 font-light">Kolalil House, Nellickal</p>
                  <p className="text-gray-400 font-light">Koipuram PO, Chengannur</p>
                  <p className="text-gray-400 font-light">Thiruvalla, Pathanamthitta</p>
                  <p className="text-gray-400 font-light">Kerala - 689531</p>
                </div>
              </div>

               <div className="flex items-start">
                <Mail className="h-6 w-6 text-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium mb-1">Email</p>
                  <p className="text-gray-400 font-light">akhilrkurup123@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
