import React from 'react';

export const About = () => {
  return (
    <div className="pt-20">
      <section className="bg-safari-olive py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">About Nkuli Adventures</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-80 font-light">
            Your trusted partner for authentic African wildlife experiences.
          </p>
        </div>
      </section>

      <section className="py-24 bg-safari-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg prose-safari mx-auto">
            <h2 className="text-4xl font-serif font-bold text-safari-earth mb-8">Our Story</h2>
            <p className="text-lg text-safari-earth/80 leading-relaxed mb-6">
              Nkuli Adventures was founded with a simple mission: to share the breathtaking beauty and rich culture of Kenya with the world. As a locally-owned tour operator, we pride ourselves on our deep connection to the land and its people.
            </p>
            <p className="text-lg text-safari-earth/80 leading-relaxed mb-6">
              We believe that a safari is more than just a vacation; it's a life-changing experience. That's why we go above and beyond to ensure every detail of your journey is perfect, from our expert guides to our comfortable 4x4 vehicles and handpicked accommodations.
            </p>
            
            <h2 className="text-4xl font-serif font-bold text-safari-earth mt-16 mb-8">Our Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 rounded-3xl safari-card-shadow">
                <h4 className="text-xl font-serif font-bold mb-4">Sustainable Tourism</h4>
                <p className="text-sm text-safari-earth/70">We are committed to preserving Kenya's natural heritage for future generations by supporting local conservation efforts.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl safari-card-shadow">
                <h4 className="text-xl font-serif font-bold mb-4">Community Support</h4>
                <p className="text-sm text-safari-earth/70">We work closely with local communities to ensure that tourism benefits the people who call these wild places home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
