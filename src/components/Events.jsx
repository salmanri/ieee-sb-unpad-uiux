import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react';
import './Events.css';

const events = [
  {
    tag: 'Workshop',
    tagColor: '#00629B',
    title: 'IoT Development Workshop with Arduino & ESP32',
    date: '15 Aug 2025',
    time: '09:00 WIB',
    location: 'Lab Teknik Elektro, Unpad Jatinangor',
  },
  {
    tag: 'Seminar',
    tagColor: '#e3a444',
    title: 'National Seminar on AI & Machine Learning Applications',
    date: '22 Jul 2025',
    time: '13:00 WIB',
    location: 'Bale Sawala, Unpad Jatinangor',
  },
  {
    tag: 'Competition',
    tagColor: '#003354',
    title: 'IEEE Xtreme 18.0 Programming Competition',
    date: '30 Jun 2025',
    time: '00:00 WIB (24h)',
    location: 'Online / Hybrid',
  },
];

export default function EventsPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="events-preview section section--blue bg-mesh-dark" ref={ref}>
      <div className="container">
        <div className="events-preview__header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="label label--light">Recent Events</span>
            <div className="accent-bar accent-bar--white" />
            <h2 className="heading-lg" style={{ color: 'white' }}>
              Upcoming & Recent Activities
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link to="/events" className="btn btn--outline-white">
              View All Events <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="events-preview__list">
          {events.map((event, i) => (
            <motion.article
              key={event.title}
              className="events-preview__item"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ x: 8 }}
            >
              <div className="events-preview__item-left">
                <span className="events-preview__tag" style={{ background: event.tagColor }}>
                  {event.tag}
                </span>
                <h3 className="events-preview__item-title">{event.title}</h3>
                <div className="events-preview__meta">
                  <span><Calendar size={13} /> {event.date}</span>
                  <span><Clock size={13} /> {event.time}</span>
                  <span><MapPin size={13} /> {event.location}</span>
                </div>
              </div>
              <ArrowRight size={20} className="events-preview__arrow" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
