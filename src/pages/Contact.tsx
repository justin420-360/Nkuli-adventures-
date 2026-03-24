import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="bg-safari-earth py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Contact Nkuli Adventures</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-80 font-light">
            Ready to start your adventure? Get in touch with our safari experts for a personalized quote.
          </p>
        </div>
      </section>

      <section className="py-20 bg-safari-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-safari-earth">Get in Touch</h2>
              <p className="text-safari-earth/70 mb-12 leading-relaxed">
                Whether you have a specific itinerary in mind or just starting to plan, we're here to help. 
                Our team typically responds to inquiries within 12-24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 text-safari-accent safari-card-shadow">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">Call or WhatsApp</h4>
                    <p className="text-safari-earth/70">+254 741 975 768</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 text-safari-accent safari-card-shadow">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">Email Us</h4>
                    <p className="text-safari-earth/70">info@nkuliadventures.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 text-safari-accent safari-card-shadow">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">Our Office</h4>
                    <p className="text-safari-earth/70">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-[40px] safari-card-shadow">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-safari-accent/20 text-safari-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Message Sent!</h3>
                  <p className="text-safari-earth/70">Thank you for reaching out. One of our experts will contact you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-safari-accent font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-safari-olive mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-safari-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-safari-accent outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-safari-olive mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-safari-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-safari-accent outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-safari-olive mb-2">Safari Destination</label>
                    <select className="w-full bg-safari-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-safari-accent outline-none">
                      <option>Maasai Mara</option>
                      <option>Amboseli</option>
                      <option>Samburu</option>
                      <option>Diani Beach</option>
                      <option>Other / Multiple</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-safari-olive mb-2">Start Date</label>
                      <input 
                        type="date" 
                        required
                        className="w-full bg-safari-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-safari-accent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-safari-olive mb-2">End Date</label>
                      <input 
                        type="date" 
                        required
                        className="w-full bg-safari-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-safari-accent outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-safari-olive mb-2">Traveling with Children?</label>
                      <select className="w-full bg-safari-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-safari-accent outline-none">
                        <option>No</option>
                        <option>Yes</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-safari-olive mb-2">Child's Age (if applicable)</label>
                      <input 
                        type="text" 
                        className="w-full bg-safari-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-safari-accent outline-none"
                        placeholder="e.g. 5, 12"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-safari-olive mb-2">Your Message</label>
                    <textarea 
                      rows={4}
                      required
                      className="w-full bg-safari-cream border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-safari-accent outline-none"
                      placeholder="Tell us about your dream safari..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-safari-olive text-white py-4 rounded-2xl font-bold hover:bg-safari-earth transition-all flex items-center justify-center gap-2"
                  >
                    Send Inquiry <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
