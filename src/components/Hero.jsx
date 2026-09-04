import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero-unpad-fix.jpg';
import './Hero.css';

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const textY = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="hero" id="home">
      {/* Background Image Container */}
      <motion.div 
        className="hero__bg"
        style={{ y: bgY }}
      >
        <img src={heroImg} alt="Universitas Padjadjaran" className="hero__img" />
        <div className="hero__overlay"></div>
      </motion.div>

      {/* Floating Gradient Orbs for modern feel */}
      <div className="hero__orb hero__orb--1"></div>
      <div className="hero__orb hero__orb--2"></div>

      <div className="container hero__container">
        <motion.div 
          className="hero__content"
          style={{ y: textY, opacity }}
        >
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Advancing Technology for Humanity
          </motion.div>

          <motion.h1 
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            IEEE Padjadjaran University<br/>
            <span className="text-orange">Student Branch</span>
          </motion.h1>

          <motion.p 
            className="hero__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Fostering innovation, research, and professional development 
            within the engineering community at Universitas Padjadjaran.
          </motion.p>

          <motion.div 
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link to="/about" className="btn btn--accent btn--lg hero__btn">
              Discover More <ArrowRight size={18} />
            </Link>
            <Link to="/events" className="btn btn--outline-white btn--lg hero__btn">
              View Events
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
