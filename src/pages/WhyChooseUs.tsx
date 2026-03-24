import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Award, Heart, ShieldCheck, Leaf, Users, Compass, ArrowRight } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Unmatched Local Expertise",
      description: "With over a decade of experience navigating Kenya's diverse landscapes, our team knows the hidden gems and the best times to witness the magic of the wild. Our guides are not just drivers; they are passionate naturalists."
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Unique & Tailored Offerings",
      description: "We don't believe in one-size-fits-all. Whether you're looking for a luxury honeymoon in the Mara or a rugged photography expedition in Samburu, we craft itineraries that reflect your specific dreams and interests."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Commitment to Excellence",
      description: "From our meticulously maintained 4x4 Land Cruisers to our hand-picked luxury camps, we never compromise on quality. Your safety, comfort, and satisfaction are our highest priorities."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Responsible & Sustainable Tourism",
      description: "We are deeply committed to preserving the wildlife and supporting the communities that make Kenya special. A portion of every safari goes directly toward local conservation and community development projects."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalized Customer Service",
      description: "From your first inquiry to the moment you fly home, you'll have a dedicated safari consultant. We provide 24/7 support to ensure your journey is seamless and stress-free."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Authentic Cultural Connections",
      description: "We go beyond the game drives. We facilitate respectful and authentic interactions with local communities, allowing you to learn about the rich heritage and traditions of the Maasai, Samburu, and other tribes."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-safari-earth py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1000" 
            alt="Elephant Pattern" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Why Choose <span className="text-safari-accent">Nkuli Adventures</span>?</h1>
            <p className="text-xl opacity-80 font-light leading-relaxed">
              We don't just sell tours; we create lifelong memories. Discover why thousands of travelers trust us to guide them through the wild heart of Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Grid of Reasons */}
      <section className="py-24 bg-safari-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-[40px] safari-card-shadow hover:scale-105 transition-transform duration-300"
              >
                <div className="text-safari-accent mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-safari-earth">{feature.title}</h3>
                <p className="text-safari-earth/70 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Tourism Deep Dive */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-[40px] overflow-hidden safari-card-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000" 
                  alt="Wildlife Conservation" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif font-bold text-safari-earth mb-6">Our Commitment to the Land</h2>
              <p className="text-lg text-safari-earth/80 leading-relaxed mb-8">
                At Nkuli Adventures, we believe that tourism should be a force for good. We operate with a "Leave No Trace" philosophy and actively partner with conservancies that prioritize wildlife protection and habitat restoration.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Supporting anti-poaching initiatives in Maasai Mara",
                  "Promoting eco-friendly lodges and camps",
                  "Empowering local communities through fair-trade tourism",
                  "Reducing plastic waste on all our safari expeditions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-safari-earth/80">
                    <div className="w-2 h-2 bg-safari-accent rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about-nkuli-adventures" className="text-safari-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn more about our mission <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-safari-olive text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl opacity-80 mb-12 font-light">
            Our safari experts are standing by to help you plan the adventure of a lifetime. Let's make your dream Kenya safari a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact-nkuli-adventures" className="bg-safari-accent text-safari-earth px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all">
              Request a Free Quote
            </Link>
            <a href="tel:+254741975768" className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-safari-earth transition-all">
              Call an Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
