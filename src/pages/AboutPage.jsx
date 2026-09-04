import { motion } from 'motion/react';
import { 
  Users, Briefcase, Camera, Beaker, Globe, Calendar 
} from 'lucide-react';
import logoIeee from '../assets/images/logo-ieee-sb-new.png';
import logoCabinet from '../assets/images/logo-kabinet-new.png';
import './AboutPage.css';

const departments = [
  {
    icon: Beaker,
    title: 'Academic & Technical',
    desc: 'Focusing on engineering hard skills, technology research, and software/hardware training.',
    color: 'var(--ieee-blue)'
  },
  {
    icon: Users,
    title: 'HR & Membership',
    desc: 'Managing memberships, internal bonding, and soft skill development for all IEEE SB Unpad members.',
    color: 'var(--unpad-orange)'
  },
  {
    icon: Camera,
    title: 'Media & Branding',
    desc: 'Maintaining the organization\'s image through visual design, social media management, and activity publications.',
    color: 'var(--ieee-blue-light)'
  },
  {
    icon: Briefcase,
    title: 'Project & Research',
    desc: 'Facilitating student innovations to participate in national and international competitions as well as real-world projects.',
    color: 'var(--ieee-blue-dark)'
  },
  {
    icon: Globe,
    title: 'External Affairs',
    desc: 'Building relations with external parties, IEEE Indonesia Section, and sponsors for collaboration.',
    color: 'var(--unpad-gold)'
  },
  {
    icon: Calendar,
    title: 'Event Operations',
    desc: 'Fully responsible for the technical management and execution of all major IEEE SB Unpad events.',
    color: 'var(--ieee-blue-deeper)'
  }
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Header */}
      <section className="about-page__header section--blue">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-page__header-content"
          >
            <h1 className="heading-xl">About Us</h1>
            <p className="about-page__header-subtitle">
              Get to know more about IEEE Student Branch Universitas Padjadjaran, 
              our history, vision, mission, and department structure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section">
        <div className="container">
          <div className="about-page__intro">
            <motion.div
              className="about-page__logos"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={logoIeee} alt="IEEE SB Unpad Logo" className="about-page__logo" />
            </motion.div>
            
            <motion.div 
              className="about-page__intro-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="label">Who We Are</span>
              <div className="accent-bar" />
              <h2 className="heading-lg">Advancing Technology<br/>for <span className="text-blue">Humanity</span></h2>
              <p>
                IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
              </p>
              <p>
                At Universitas Padjadjaran, the IEEE Student Branch serves as a platform for engineering and science students to develop their potential, expand their global network, and contribute to technological innovation. We bridge the gap between academic theory and industry practice through seminars, workshops, and collaborative research projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cabinet Vector */}
      <section className="section section--pale">
        <div className="container">
          <div className="about-page__cabinet">
            <motion.div 
              className="about-page__cabinet-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="label">2024 / 2025</span>
              <div className="accent-bar accent-bar--orange" />
              <h2 className="heading-lg">Cabinet <span className="text-orange">Vector</span></h2>
              <p>
                A vector has both magnitude and direction. Similarly, this year's cabinet is committed not only to growing in quantity (magnitude), but also to having a clear goal and direction in every step and program we execute.
              </p>
            </motion.div>
            <motion.div
              className="about-page__cabinet-logo"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: 3 }}
            >
              <img src={logoCabinet} alt="Cabinet Vector" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="text-center" 
            style={{ marginBottom: 'var(--space-4xl)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="label">Our Structure</span>
            <div className="accent-bar accent-bar--center" />
            <h2 className="heading-lg">Departments & Divisions</h2>
          </motion.div>

          <div className="about-page__departments">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.title}
                className="about-page__dept-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
              >
                <div className="about-page__dept-icon" style={{ background: dept.color }}>
                  <dept.icon size={24} color="white" />
                </div>
                <h3 className="heading-sm">{dept.title}</h3>
                <p className="about-page__dept-desc">{dept.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
