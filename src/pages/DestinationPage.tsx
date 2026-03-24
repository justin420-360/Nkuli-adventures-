import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, MapPin, DollarSign, ArrowRight } from 'lucide-react';
import { SAFARI_PACKAGES } from '../types';

export const DestinationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const pkg = SAFARI_PACKAGES.find(p => p.slug === slug);

  if (!pkg) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-serif mb-4">Package Not Found</h1>
        <Link to="/kenya-safaris" className="text-safari-accent font-bold">Back to Safaris</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={pkg.image} 
            alt={pkg.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest mb-4 text-safari-accent">
              <span className="flex items-center gap-1"><Clock size={16} /> {pkg.duration}</span>
              <span className="flex items-center gap-1"><MapPin size={16} /> Kenya</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{pkg.title}</h1>
            <p className="text-xl max-w-2xl opacity-90 font-light">{pkg.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-safari-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-white p-8 md:p-12 rounded-[40px] safari-card-shadow">
                <h2 className="text-3xl font-serif font-bold mb-6">Safari Overview</h2>
                <p className="text-safari-earth/80 leading-relaxed mb-8">
                  This {pkg.duration} safari to {pkg.title.split(' ')[2] || 'Kenya'} is designed to give you the ultimate wildlife experience. 
                  From the moment we pick you up in Nairobi, you'll be in the hands of professional experts who know these lands intimately.
                </p>
                
                <h3 className="text-xl font-serif font-bold mb-4">Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3 text-safari-earth/80">
                      <CheckCircle2 size={20} className="text-safari-accent shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[40px] safari-card-shadow">
                <h2 className="text-3xl font-serif font-bold mb-6">Itinerary</h2>
                <div className="space-y-8">
                  {[1, 2, 3].slice(0, parseInt(pkg.duration)).map((day) => (
                    <div key={day} className="flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-safari-olive text-white flex items-center justify-center shrink-0 font-bold">
                        {day}
                      </div>
                      <div>
                        <h4 className="text-xl font-serif font-bold mb-2">Day {day}: Exploration & Adventure</h4>
                        <p className="text-sm text-safari-earth/70 leading-relaxed">
                          Early morning game drive followed by breakfast. Spend the day tracking the Big Five and enjoying the breathtaking landscapes of {pkg.title.split(' ')[2] || 'the reserve'}. Evening sundowner and dinner at the camp.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar / Booking */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-safari-earth text-white p-8 rounded-[40px] safari-card-shadow">
                <div className="mb-8">
                  <p className="text-sm uppercase tracking-widest opacity-60 mb-1">Starting from</p>
                  <p className="text-4xl font-serif font-bold text-safari-accent">{pkg.price}</p>
                  <p className="text-xs opacity-60 mt-2">*Price per person sharing</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <span className="text-sm opacity-70">Duration</span>
                    <span className="font-bold">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <span className="text-sm opacity-70">Transport</span>
                    <span className="font-bold">4x4 Land Cruiser</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <span className="text-sm opacity-70">Group Size</span>
                    <span className="font-bold">Max 6 per vehicle</span>
                  </div>
                </div>

                <Link 
                  to="/contact-nkuli-adventures" 
                  className="block w-full bg-safari-accent text-safari-earth text-center py-4 rounded-full font-bold hover:bg-white transition-all mb-4"
                >
                  Book This Safari
                </Link>
                <p className="text-[10px] text-center opacity-50">Secure your spot with a 20% deposit</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
