import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks';
import { journalArticles } from '../data/products';
import './JournalPreview.css';

export function JournalPreview() {
  const { ref, isInView } = useInView();

  return (
    <section className="journal-preview" ref={ref}>
      <div className="journal-preview__inner">
        <motion.div
          className="journal-preview__header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="journal-preview__title">From the Workshop</h2>
          <p className="journal-preview__subtitle">Notes on making, sourcing, and the people behind the stitch.</p>
        </motion.div>

        <div className="journal-preview__grid">
          {journalArticles.map((article, i) => (
            <motion.article
              key={article.id}
              className="journal-preview__card"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link to="/journal" className="journal-preview__link">
                <div className="journal-preview__image-wrapper">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="journal-preview__image"
                    loading="lazy"
                  />
                </div>
                <div className="journal-preview__info">
                  <p className="journal-preview__category">{article.category}</p>
                  <h3 className="journal-preview__article-title">{article.title}</h3>
                  <p className="journal-preview__date">{article.date}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="journal-preview__cta"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/journal" className="journal-preview__view-all">
            Read the Journal
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
