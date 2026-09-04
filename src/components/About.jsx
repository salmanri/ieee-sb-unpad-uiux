import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Globe, BookOpen } from 'lucide-react';
import './About.css';

const highlights = [
  { icon: Zap, title: 'Innovation', desc: 'Fostering technological innovation through real-world research and projects' },
  { icon: Users, title: 'Community', desc: 'An active and collaborative engineering student community' },
  { icon: Globe, title: 'Global Network', desc: 'Connect with 400,000+ IEEE members worldwide' },
  { icon: BookOpen, title: 'Knowledge', desc: 'Access to high-quality scientific publications, workshops, and seminars' },
];

export default function AboutPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="about-preview section" ref={ref}>
      <div className="container">
        <div className="about-preview__grid">
          {/* Left — Text */}
          <div className="about-preview__text">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="label">About Us</span>
              <div className="accent-bar" />
              <h2 className="heading-lg">
                IEEE Student Branch<br />
                <span className="text-blue">Universitas Padjadjaran</span>
              </h2>
            </motion.div>

            <motion.p
              className="about-preview__desc"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              IEEE Student Branch Universitas Padjadjaran is a student branch of the
              Institute of Electrical and Electronics Engineers (IEEE) committed
              to advancing technology for humanity. Under the spirit of Cabinet Vector, 
              we foster the scientific and professional growth of our members through 
              academic activities, research, and community service.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Link to="/about" className="btn btn--primary">
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Right — Highlights */}
          <div className="about-preview__highlights">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="about-preview__card"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,98,155,0.15)' }}
              >
                <div className="about-preview__card-icon">
                  <item.icon size={22} />
                </div>
                <div>
                  <h4 className="about-preview__card-title">{item.title}</h4>
                  <p className="about-preview__card-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
