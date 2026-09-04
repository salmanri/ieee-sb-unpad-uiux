import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, MapPin, Clock } from 'lucide-react';
import heroImg from '../assets/images/hero-unpad-original.jpg';
import './EventsPage.css';

const events = [
  {
    id: 1,
    type: 'News',
    title: 'IEEE SB Unpad Wins Best Student Branch Award 2025',
    date: 'Jun 20, 2025',
    time: '10:00 AM',
    location: 'Jakarta, Indonesia',
    image: heroImg
  },
  {
    id: 2,
    type: 'Events',
    title: 'National Seminar on AI & Machine Learning Applications',
    date: 'Jul 22, 2025',
    time: '01:00 PM',
    location: 'Bale Sawala, Unpad Jatinangor',
    image: heroImg
  },
  {
    id: 3,
    type: 'Events',
    title: 'IoT Development Workshop with Arduino & ESP32',
    date: 'Aug 15, 2025',
    time: '09:00 AM',
    location: 'Lab Teknik Elektro, Unpad Jatinangor',
    image: heroImg
  },
  {
    id: 4,
    type: 'News',
    title: 'New Cabinet Vector Officially Inaugurated',
    date: 'May 10, 2025',
    time: '08:00 AM',
    location: 'Rektorat Unpad',
    image: heroImg
  }
];

export default function EventsPage() {
  const [filter, setFilter] = useState('All');

  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(e => e.type === filter);

  const latestEvent = filteredEvents[0];
  const otherEvents = filteredEvents.slice(1);

  return (
    <main className="events-page">
      <div className="container">
        {/* Header */}
        <section className="events-page__header">
          <motion.h1 
            className="heading-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            News And Events
          </motion.h1>
          <motion.p 
            className="events-page__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Stay updated with the latest news, events, and insightful activities from IEEE SB Unpad, 
            covering technology, innovation, and organizational milestones.
          </motion.p>
          
          {/* Segmented Control */}
          <motion.div 
            className="segmented-control"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['All', 'Events', 'News'].map(f => (
              <button 
                key={f}
                className={`segmented-control__btn ${filter === f ? 'segmented-control__btn--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </section>

        {/* Latest Update */}
        {latestEvent && (
          <section className="events-page__latest">
            <motion.h2 
              className="heading-md events-page__section-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Latest Update
            </motion.h2>
            <motion.div 
              className="events-page__big-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="events-page__big-img-wrapper">
                <img src={latestEvent.image} alt={latestEvent.title} />
                <div className="events-page__big-overlay">
                  <div className="events-page__big-content">
                    <span className="events-page__big-tag">{latestEvent.type}</span>
                    <h3 className="heading-lg" style={{color: 'white'}}>{latestEvent.title}</h3>
                    <div className="events-page__meta">
                      <span><Calendar size={14}/> {latestEvent.date}</span>
                      <span><Clock size={14}/> {latestEvent.time}</span>
                      <span><MapPin size={14}/> {latestEvent.location}</span>
                    </div>
                  </div>
                  <button className="events-page__arrow-btn">
                    <ArrowUpRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* Other Updates Grid */}
        {otherEvents.length > 0 && (
          <section className="events-page__grid-section">
            <h2 className="heading-md events-page__section-title">More Updates</h2>
            <div className="events-page__grid">
              {otherEvents.map((item, i) => (
                <motion.div 
                  key={item.id}
                  className="events-page__card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, boxShadow: 'var(--shadow-lg)' }}
                >
                  <div className="events-page__card-img">
                    <img src={item.image} alt={item.title} />
                    <span className="events-page__card-tag">{item.type}</span>
                  </div>
                  <div className="events-page__card-body">
                    <h4 className="events-page__card-title">{item.title}</h4>
                    <div className="events-page__meta events-page__meta--dark">
                      <span><Calendar size={12}/> {item.date}</span>
                    </div>
                    <div className="events-page__card-footer">
                      <span className="text-blue" style={{fontWeight: 700}}>Read More</span>
                      <ArrowUpRight size={16} className="text-blue" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
