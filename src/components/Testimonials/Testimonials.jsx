import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: '"This felt different."',
    text: 'Finally, a conference where I could be myself and share real experiences.',
    name: 'Sarah Chen',
    role: 'Product Designer',
    color: 'var(--color-bg-peach)',
  },
  {
    quote: '"I finally felt heard."',
    text: 'The conversations went deep. It wasn\'t surface-level networking.',
    name: 'Maya Patel',
    role: 'Software Engineer',
    color: 'var(--color-bg-sage)',
  },
  {
    quote: '"Not a conference. A community."',
    text: 'I left with friends, collaborators, and a renewed sense of purpose.',
    name: 'Jessica Williams',
    role: 'Founder',
    color: 'var(--color-bg-mint)',
  },
  {
    quote: '"Conversations that matter."',
    text: 'Real talk about the challenges we face and how we\'re overcoming them.',
    name: 'Aisha Mohammed',
    role: 'Creative Director',
    color: 'var(--color-bg-lavender)',
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={styles.card}
              style={{ background: testimonial.color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className={styles.quote}>{testimonial.quote}</h3>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  <img 
                    src={`/Screenshot 2026-02-10 192021.png`} 
                    alt={testimonial.name}
                  />
                </div>
                <div>
                  <div className={styles.name}>{testimonial.name}</div>
                  <div className={styles.role}>{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
