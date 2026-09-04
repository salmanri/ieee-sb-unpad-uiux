import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './Publications.css';

const pubs = [
  { category: 'Research', title: 'Machine Learning Applications in Smart Grid Optimization', date: 'Aug 2025' },
  { category: 'Article', title: 'Getting Started with IEEE: A Complete Student Guide', date: 'Jul 2025' },
  { category: 'News', title: 'IEEE SB Unpad Wins Best Student Branch Award 2025', date: 'Jun 2025' },
  { category: 'Tutorial', title: 'Building IoT Prototypes with Arduino & ESP32', date: 'May 2025' },
];

export default function PublicationsPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="pubs-preview section bg-mesh-light" ref={ref}>
      <div className="container">
        <div className="pubs-preview__header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="label">Publications</span>
            <div className="accent-bar" />
            <h2 className="heading-lg">Latest <span className="text-blue">News & Articles</span></h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link to="/publications" className="btn btn--outline">
              All Publications <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="pubs-preview__grid">
          {pubs.map((pub, i) => (
            <motion.article
              key={pub.title}
              className="pubs-preview__card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="pubs-preview__card-top">
                <span className="pubs-preview__category">{pub.category}</span>
                <span className="pubs-preview__date">{pub.date}</span>
              </div>
              <h3 className="pubs-preview__card-title">{pub.title}</h3>
              <div className="pubs-preview__card-link">
                Read More <ArrowUpRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
