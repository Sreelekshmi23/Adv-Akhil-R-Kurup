import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Shield, Users, Briefcase, FileText, Gavel } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scale className="h-8 w-8 text-gold" />,
      title: "Civil Litigation",
      description: "Comprehensive representation in property disputes, contract issues, and other civil matters."
    },
    {
      icon: <Shield className="h-8 w-8 text-gold" />,
      title: "Criminal Defense",
      description: "Robust defense strategies and legal counsel for individuals facing criminal charges."
    },
    {
      icon: <Users className="h-8 w-8 text-gold" />,
      title: "Family Law",
      description: "Compassionate legal support for divorce, child custody, alimony, and marital disputes."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-gold" />,
      title: "Corporate Law",
      description: "Advisory and litigation services for businesses, including compliance and contract formulation."
    },
    {
      icon: <FileText className="h-8 w-8 text-gold" />,
      title: "Document Drafting",
      description: "Meticulous drafting of legal notices, deeds, agreements, and contracts."
    },
    {
      icon: <Gavel className="h-8 w-8 text-gold" />,
      title: "Legal Consultancy",
      description: "Expert legal opinions and strategic advice for individuals and organizations."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gold tracking-widest text-sm font-semibold uppercase mb-3">Practice Areas</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white">Areas of Expertise</h3>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-6"></div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-panel p-8 rounded-sm hover:-translate-y-1 transition-transform duration-300 group"
            >
              <div className="mb-5 md:mb-6 p-3 md:p-4 rounded-full bg-royal-900 inline-block border border-royal-700/50 group-hover:border-gold/30 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
