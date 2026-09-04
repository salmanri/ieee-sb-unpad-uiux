import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import heroImg from '../assets/images/hero-unpad-original.jpg'; 
import '../pages/EventsPage.css';

const pubs = [
  {
    id: 1,
    type: 'Research',
    title: 'Machine Learning Applications in Smart Grid Optimization',
    author: 'IEEE Tech Team',
    date: 'Aug 2025',
    image: heroImg
  },
  {
    id: 2,
    type: 'Articles',
    title: 'Getting Started with IEEE: A Complete Student Guide',
    author: 'HR Division',
    date: 'Jul 2025',
    image: heroImg
  },
  {
    id: 3,
    type: 'Research',
    title: 'Renewable Energy Integration in Rural Areas',
    author: 'Project Division',
    date: 'May 2025',
    image: heroImg
  }
];

export default function PublicationsPage() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' 
    ? pubs 
    : pubs.filter(e => e.type === filter);

  const latest = filtered[0];
  const others = filtered.slice(1);

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
            Publications
          </motion.h1>
          <motion.p 
            className="events-page__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore our latest research papers, technical articles, and insights 
            written by the members of IEEE SB Unpad.
          </motion.p>
          
          <motion.div 
            className="segmented-control"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['All', 'Research', 'Articles'].map(f => (
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

        {/* Latest */}
        {latest && (
          <section className="events-page__latest">
            <motion.h2 
              className="heading-md events-page__section-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Read
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
                <img src={latest.image} alt={latest.title} />
                <div className="events-page__big-overlay">
                  <div className="events-page__big-content">
                    <span className="events-page__big-tag">{latest.type}</span>
                    <h3 className="heading-lg" style={{color: 'white'}}>{latest.title}</h3>
                    <div className="events-page__meta">
                      <span><BookOpen size={14}/> By {latest.author}</span>
                      <span>{latest.date}</span>
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

        {/* Grid */}
        {others.length > 0 && (
          <section className="events-page__grid-section">
            <h2 className="heading-md events-page__section-title">More Publications</h2>
            <div className="events-page__grid">
              {others.map((item, i) => (
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
                      <span>By {item.author} • {item.date}</span>
                    </div>
                    <div className="events-page__card-footer">
                      <span className="text-blue" style={{fontWeight: 700}}>Read Document</span>
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
