import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Destinations', 
      path: '/kenya-safaris',
      submenu: [
        { name: 'Maasai Mara', path: '/maasai-mara-safari' },
        { name: 'Amboseli', path: '/amboseli-safari' },
        { name: 'Samburu', path: '/samburu-safari' },
        { name: 'Ol Pejeta', path: '/ol-pejeta-safari' },
        { name: 'Lake Nakuru', path: '/lake-nakuru-safari' },
        { name: 'Lake Naivasha', path: '/lake-naivasha-safari' },
        { name: 'Tsavo', path: '/tsavo-safari' },
        { name: 'Diani Beach', path: '/diani-beach-holiday' },
      ]
    },
    { name: 'About Us', path: '/about-nkuli-adventures' },
    { name: 'Why Us', path: '/why-choose-nkuli-adventures' },
    { name: 'Blog', path: '/kenya-safari-blog' },
    { name: 'Contact', path: '/contact-nkuli-adventures' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-nav border-b border-safari-olive/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-wider text-safari-earth">NKULI</span>
              <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-semibold text-safari-olive -mt-1">Adventures</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className="text-sm font-medium text-safari-earth hover:text-safari-accent transition-colors uppercase tracking-wider flex items-center gap-1"
                >
                  {link.name}
                  {link.submenu && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  )}
                </Link>
                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-safari-olive/10 overflow-hidden">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-6 py-3 text-xs font-bold uppercase tracking-widest text-safari-earth hover:bg-safari-cream hover:text-safari-accent transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact-nkuli-adventures"
              className="bg-safari-olive text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-safari-earth transition-colors"
            >
              Book Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-safari-earth p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-safari-cream border-b border-safari-olive/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-base font-medium text-safari-earth hover:text-safari-accent"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-safari-earth text-safari-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-2xl font-serif font-bold tracking-wider text-white">NKULI</span>
              <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-semibold text-safari-accent -mt-1">Adventures</span>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Leading Kenya safari company offering unforgettable Kenya safaris to Maasai Mara, Amboseli, Samburu, and beyond.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="hover:text-safari-accent cursor-pointer" />
              <Instagram size={20} className="hover:text-safari-accent cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link to="/kenya-safaris" className="hover:text-safari-accent">Kenya Safaris</Link></li>
              <li><Link to="/why-choose-nkuli-adventures" className="hover:text-safari-accent">Why Choose Us</Link></li>
              <li><Link to="/about-nkuli-adventures" className="hover:text-safari-accent">About Nkuli Adventures</Link></li>
              <li><Link to="/kenya-safari-blog" className="hover:text-safari-accent">Kenya Safari Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <span>+254 741 975 768</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <span>info@nkuliadventures.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">SEO Keywords</h4>
            <div className="flex flex-wrap gap-2">
              {['Kenya Safari', 'Maasai Mara', 'Amboseli', 'Samburu', 'Diani Beach'].map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-wider border border-white/20 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-60">
            © 2024 Nkuli Adventures. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};
