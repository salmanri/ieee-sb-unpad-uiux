import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoIeee from '../assets/images/logo-ieee-fix.png';
import logoCabinet from '../assets/images/logo-kabinet-new.png';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'News & Events', href: '/events' },
  { label: 'Publications', href: '/publications' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">
        <div className="navbar__inner">
          {/* Logos */}
          <Link to="/" className="navbar__logo">
            <img src={logoIeee} alt="IEEE SB Unpad" className="navbar__logo-ieee" />
            <div className="navbar__logo-divider" />
            <img src={logoCabinet} alt="Cabinet Vector" className="navbar__logo-cabinet" />
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar__nav">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`navbar__link ${location.pathname === link.href ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="navbar__actions">
            <a href="https://www.ieee.org/membership" target="_blank" rel="noopener noreferrer" className="btn btn--primary navbar__btn-join">
              Join IEEE
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar__toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="navbar__mobile-nav">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={`navbar__mobile-link ${location.pathname === link.href ? 'navbar__mobile-link--active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
