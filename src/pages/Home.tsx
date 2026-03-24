import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Clock, Tag } from 'lucide-react';
import { SAFARI_PACKAGES, BLOG_POSTS } from '../types';

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2000" 
            alt="Kenya Safari" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight mb-6">
              Experience the <br />
              <span className="italic text-safari-accent">Wild Heart</span> of Kenya
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8 opacity-90 font-light leading-relaxed">
              Nkuli Adventures is a leading Kenya safari company offering unforgettable Kenya safaris to Maasai Mara, Amboseli, Samburu, and Diani Beach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/kenya-safaris" className="bg-safari-accent text-safari-earth px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2">
                Explore Safaris <ArrowRight size={20} />
              </Link>
              <Link to="/contact-nkuli-adventures" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-safari-earth transition-all text-center">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section - SEO Text */}
      <section className="py-24 bg-safari-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-safari-earth">
            Nkuli Adventures – Kenya Safari Experts
          </h2>
          <div className="space-y-6 text-lg text-safari-earth/80 leading-relaxed">
            <p>
              Nkuli Adventures is a leading Kenya safari company offering unforgettable Kenya safaris to Maasai Mara, Amboseli National Park, Samburu National Reserve, Ol Pejeta Conservancy, Lake Nakuru National Park, Lake Naivasha and Diani Beach. We specialize in luxury safaris, mid-range safaris, budget safaris, group safaris, family safaris and honeymoon safaris.
            </p>
            <p>
              Our Kenya safari packages include Maasai Mara safaris, Amboseli safaris, Samburu safaris, Ol Pejeta safaris, Lake Nakuru safaris and Kenya beach holidays in Diani. Nkuli Adventures is a trusted Kenya tour operator providing professional safari guides, 4x4 Land Cruisers, and well organized safari itineraries.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Safaris */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-safari-earth mb-4">Popular Safari Packages</h2>
              <p className="text-safari-olive font-medium">Handpicked adventures for every traveler</p>
            </div>
            <Link to="/kenya-safari-blog" className="hidden md:flex items-center gap-2 text-safari-accent font-bold hover:underline">
              View All Packages <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SAFARI_PACKAGES.slice(0, 3).map((pkg) => (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -10 }}
                className="bg-safari-cream rounded-3xl overflow-hidden safari-card-shadow group"
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
                    View Itinerary <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-safari-olive text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Why Book Your Kenya Safari With Us?</h2>
              <div className="space-y-8">
                {[
                  { title: 'Expert Local Guides', desc: 'Our professional guides have years of experience and deep knowledge of Kenya\'s wildlife.' },
                  { title: '4x4 Land Cruisers', desc: 'We use well-maintained 4x4 Land Cruisers for maximum comfort and off-road capability.' },
                  { title: 'Tailor-Made Itineraries', desc: 'We customize every safari to match your preferences, budget, and schedule.' },
                  { title: '24/7 Support', desc: 'From the moment you land until you depart, our team is available to assist you.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center shrink-0 text-safari-accent font-serif text-2xl">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-bold mb-2">{item.title}</h4>
                      <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523805081730-6144a777a660?auto=format&fit=crop&q=80&w=1000" 
                  alt="Safari Guide" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-safari-accent p-8 rounded-3xl hidden md:block">
                <p className="text-safari-earth font-serif text-4xl font-bold">10+</p>
                <p className="text-safari-earth/80 text-sm font-bold uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-safari-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-safari-earth mb-4">Kenya Safari Blog</h2>
            <p className="text-safari-olive font-medium">Insights, tips, and stories from the savannah</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link to={`/kenya-safari-blog/${post.slug}`} key={post.id} className="group">
                <div className="bg-white rounded-3xl overflow-hidden safari-card-shadow h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold text-safari-accent uppercase tracking-widest mb-2 block">{post.date}</span>
                    <h3 className="text-xl font-serif font-bold mb-3 text-safari-earth group-hover:text-safari-accent transition-colors">{post.title}</h3>
                    <p className="text-sm text-safari-earth/70 line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/254741975768" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform flex items-center gap-2"
      >
        <span className="hidden md:inline font-bold">Chat with us</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
      </a>
    </div>
  );
};
