import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { SafariList } from './pages/SafariList';
import { DestinationPage } from './pages/DestinationPage';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { WhyChooseUs } from './pages/WhyChooseUs';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kenya-safaris" element={<SafariList />} />
            <Route path="/:slug" element={<DestinationPage />} />
            <Route path="/about-nkuli-adventures" element={<About />} />
            <Route path="/why-choose-nkuli-adventures" element={<WhyChooseUs />} />
            <Route path="/contact-nkuli-adventures" element={<Contact />} />
            <Route path="/kenya-safari-blog" element={<Blog />} />
            <Route path="/kenya-safari-cost" element={<Blog />} /> {/* Placeholder for cost guide */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
