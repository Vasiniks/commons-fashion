import { motion } from 'framer-motion';
import { brand } from '../data/brand';
import './AboutPage.css';

export function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-page__hero">
        <motion.h1
          className="about-page__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Our Story
        </motion.h1>
      </div>

      <section className="about-page__philosophy">
        <div className="about-page__philosophy-inner">
          <motion.p
            className="about-page__manifesto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {brand.philosophy}
          </motion.p>
        </div>
      </section>

      <section className="about-page__story">
        <div className="about-page__story-inner">
          <motion.div
            className="about-page__story-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {brand.story.split('\n\n').map((paragraph, i) => (
              <p key={i} className="about-page__paragraph">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="about-page__story-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/images/editorial/craft-detail.jpg"
              alt="Craftsmanship detail"
            />
          </motion.div>
        </div>
      </section>

      <section className="about-page__values">
        <div className="about-page__values-inner">
          <motion.h2
            className="about-page__values-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Believe
          </motion.h2>

          <div className="about-page__values-grid">
            {[
              {
                title: 'Quality Without Pretension',
                body: 'We use the same mills and workshops as houses that charge five times more. The difference is not in the making — it is in the naming.',
              },
              {
                title: 'Designed to Last',
                body: 'We do not design for a season. We design for years. Every piece is one we are willing to repair, replace, or simply continue making.',
              },
              {
                title: 'Honest Pricing',
                body: 'No artificial scarcity. No inflated markups. What you pay is what the craft costs, plus a fair margin for us to keep going.',
              },
              {
                title: 'Restraint',
                body: 'We release twice a year. We make fewer things, and we make them well. Restraint is not a limitation — it is the whole point.',
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                className="about-page__value"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <h3 className="about-page__value-title">{value.title}</h3>
                <p className="about-page__value-body">{value.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page__contact">
        <div className="about-page__contact-inner">
          <h2 className="about-page__contact-title">Get in Touch</h2>
          <p className="about-page__contact-body">
            Questions, feedback, or just want to say hello.
          </p>
          <a href={`mailto:${brand.email}`} className="about-page__contact-email">
            {brand.email}
          </a>
        </div>
      </section>
    </main>
  );
}
