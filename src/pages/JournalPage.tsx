import { motion } from 'framer-motion';
import { journalArticles } from '../data/products';
import './JournalPage.css';

export function JournalPage() {
  return (
    <main className="journal-page">
      <div className="journal-page__header">
        <motion.h1
          className="journal-page__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          The Companion
        </motion.h1>
        <motion.p
          className="journal-page__subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Notes on making, sourcing, and the people behind the stitch.
        </motion.p>
      </div>

      <div className="journal-page__grid">
        {journalArticles.map((article, i) => (
          <motion.article
            key={article.id}
            className="journal-page__card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1 + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="journal-page__image-wrapper">
              <img
                src={article.image}
                alt={article.title}
                className="journal-page__image"
                loading="lazy"
              />
            </div>
            <div className="journal-page__info">
              <p className="journal-page__category">{article.category}</p>
              <h2 className="journal-page__article-title">{article.title}</h2>
              <p className="journal-page__excerpt">{article.excerpt}</p>
              <p className="journal-page__date">{article.date}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <section className="journal-page__featured">
        <motion.div
          className="journal-page__featured-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="journal-page__featured-image">
            <img
              src="/images/editorial/lifestyle.jpg"
              alt="The quiet wardrobe"
            />
          </div>
          <div className="journal-page__featured-content">
            <p className="journal-page__featured-label">Featured Essay</p>
            <h2 className="journal-page__featured-title">The Quiet Wardrobe</h2>
            <p className="journal-page__featured-body">
              Dressing without performance. On clothing as a private pleasure rather than
              a public statement. How the most considered wardrobes are often the quietest.
            </p>
            <p className="journal-page__featured-body">
              We speak to three people whose daily uniform consists of five pieces or fewer —
              and why they wouldn't have it any other way.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
