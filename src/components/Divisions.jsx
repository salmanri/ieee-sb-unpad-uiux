import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import {
  GraduationCap,
  UsersRound,
  Palette,
  FlaskConical,
  Handshake,
  CalendarCheck,
} from 'lucide-react';
import './Divisions.css';

const divisions = [
  {
    icon: <GraduationCap size={28} />,
    name: 'Academic & Technical',
    color: '#2a5697',
    desc: 'Organizing workshops, bootcamps, and technical training sessions to enhance members\' hard skills and knowledge.',
  },
  {
    icon: <UsersRound size={28} />,
    name: 'HR & Membership',
    color: '#00629B',
    desc: 'Managing member recruitment, internal development, and ensuring a healthy organizational culture.',
  },
  {
    icon: <Palette size={28} />,
    name: 'Media & Branding',
    color: '#e3a444',
    desc: 'Crafting visual identity, managing social media presence, and creating engaging content for the community.',
  },
  {
    icon: <FlaskConical size={28} />,
    name: 'Project & Research',
    color: '#2a5697',
    desc: 'Driving innovation through hands-on projects, research initiatives, and collaborative engineering solutions.',
  },
  {
    icon: <Handshake size={28} />,
    name: 'External Affairs',
    color: '#00629B',
    desc: 'Building partnerships with industry, academia, and other IEEE branches for collaboration opportunities.',
  },
  {
    icon: <CalendarCheck size={28} />,
    name: 'Event Operations',
    color: '#e3a444',
    desc: 'Planning and executing events, ensuring seamless logistics, and delivering memorable experiences.',
  },
];

export default function Divisions() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="divisions" className="section divisions" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="divisions__header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Our Divisions</span>
          <h2 className="section-title">
            Six Pillars of <span style={{ color: 'var(--color-primary)' }}>Excellence</span>
          </h2>
          <p className="section-subtitle">
            Each division plays a vital role in advancing our mission and creating impact within the community.
          </p>
        </motion.div>

        <div className="divisions__grid">
          {divisions.map((div, i) => (
            <motion.div
              key={div.name}
              className={`divisions__card ${hoveredIndex === i ? 'divisions__card--active' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div
                className="divisions__card-icon"
                style={{ '--card-color': div.color }}
              >
                {div.icon}
              </div>
              <h3 className="divisions__card-name">{div.name}</h3>
              <p className="divisions__card-desc">{div.desc}</p>
              <div className="divisions__card-line" style={{ background: div.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
