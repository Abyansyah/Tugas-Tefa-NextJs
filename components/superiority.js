import React from 'react';
import styles from '../styles/superiority.module.css';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' });
  });
  return (
    <>
      <section className={styles.detail}>
        <h1 className={styles.heading}>Superiority</h1>
        <div className={styles.container}>
          <div data-aos="zoom-in" className={styles.left}>
            <div className={styles.left_content}>
              <h1>Ultra Light</h1>
              <p>
                Drone move faster with weighing <br /> component <span>under 200 g</span>{' '}
              </p>
            </div>
          </div>
          <div data-aos="zoom-in" className={styles.right}>
            <div className={styles.right_content}>
              <h1>Best Resolution</h1>
              <p>
                Take a beautiful view with best camera <br /> up to <span>4K Camera Resolution</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
