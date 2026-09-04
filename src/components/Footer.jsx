import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import logoIeee from '../assets/images/logo-ieee-sb-new.png';
import './Footer.css';

const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const IconLinkedin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      {/* IEEE Blue top bar */}
      <div className="footer__topbar">
        <div className="container">
          <div className="footer__topbar-inner">
            <p>Interested in joining IEEE SB UNPAD?</p>
            <Link to="/about" className="btn btn--accent">
              Become a Member
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logoIeee} alt="IEEE SB Unpad" className="footer__logo-img" />
            </div>
            <p className="footer__brand-desc">
              Universitas Padjadjaran Chapter — Cabinet Vector 2024/2025
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social" aria-label="Instagram"><IconInstagram /></a>
              <a href="#" className="footer__social" aria-label="LinkedIn"><IconLinkedin /></a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/about" className="footer__link">About</Link>
            <Link to="/events" className="footer__link">Events</Link>
            <Link to="/publications" className="footer__link">Publications</Link>
          </div>

          {/* Resources */}
          <div className="footer__col">
            <h4 className="footer__col-title">Resources</h4>
            <a href="https://www.ieee.org" target="_blank" rel="noopener" className="footer__link">
              IEEE Global <ExternalLink size={11} />
            </a>
            <a href="https://www.ieee.org/membership" target="_blank" rel="noopener" className="footer__link">
              IEEE Membership <ExternalLink size={11} />
            </a>
            <a href="#" className="footer__link">IEEE Xplore</a>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <div className="footer__contact">
              <Mail size={14} />
              <span>ieee.sb.unpad@gmail.com</span>
            </div>
            <div className="footer__contact">
              <MapPin size={14} />
              <span>Universitas Padjadjaran, Jatinangor, Sumedang 45363</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} IEEE Student Branch Universitas Padjadjaran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
