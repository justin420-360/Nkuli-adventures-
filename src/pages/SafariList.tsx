import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { SAFARI_PACKAGES } from '../types';

export const SafariList = () => {
  return (
    <div className="pt-20">
      <section className="bg-safari-olive py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Kenya Safari Packages</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-80 font-light">
            Explore our wide range of carefully crafted safari itineraries across Kenya's most iconic national parks and reserves.
          </p>
        </div>
      </section>

      <section className="py-20 bg-safari-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAFARI_PACKAGES.map((pkg) => (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden safari-card-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-sm font-bold text-safari-earth">
                    {pkg.price}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs font-bold text-safari-olive uppercase tracking-widest mb-3">
                    <span className="flex items-center gap-1"><Clock size={14} /> {pkg.duration}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> Kenya</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-safari-earth">{pkg.title}</h3>
                  <p className="text-sm text-safari-earth/70 mb-6 line-clamp-2">{pkg.description}</p>
                  <Link 
                    to={`/${pkg.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-safari-accent hover:gap-3 transition-all"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
