import React from 'react';
import styles from '../styles/footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.logo_detail}>
              <span className={styles.logo_name}>GJI<span className={styles.dot}>.</span></span>
            </div>
            <div className={styles.media_icons}>
              <a href="#">
                <FaFacebookF/>
              </a>
              <a href="#">
                <FaTwitter/>
              </a>
              <a href="#">
                <FaInstagram/>
              </a>
              <a href="#">
                <FaYoutube/>
              </a>
            </div>
          </div>
          <div className={styles.link_boxes}>
            <ul className={styles.box}>
              <li className={styles.link_name}>Product Categories</li>
              <li>
                <a href="#">Consumer</a>
              </li>
              <li>
                <a href="#">Profesional</a>
              </li>
              <li>
                <a href="#">Enterprise</a>
              </li>
              <li>
                <a href="#">Components</a>
              </li>
            </ul>
            <ul className={styles.box}>
              <li className={styles.link_name}>Support</li>
              <li>
                <a href="#">Product Support</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Download Center</a>
              </li>
              <li>
                <a href="#">Security and Privacy</a>
              </li>
            </ul>
            <ul className={styles.box}>
              <li className={styles.link_name}>Explore</li>
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Mini Drones</a>
              </li>
              <li>
                <a href="#">BJI Camera Drones</a>
              </li>
            </ul>
            <ul className={styles.box}>
              <li className={styles.link_name}>Comunity</li>
              <li>
                <a href="#">SKyPixel</a>
              </li>
              <li>
                <a href="#">BJI Forum</a>
              </li>
              <li>
                <a href="#">Developer</a>
              </li>
              <li>
                <a href="#">Deren</a>
              </li>
            </ul>
            <ul className={`${styles.box} ${styles.input_box}`}>
              <li className={styles.link_name}>Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom_details}>
          <div className={styles.bottom_text}>
            <span className={styles.copyright_text}>
              Copyright © 2023 <a href="#">GJI.</a>All rights reserved
            </span>
            <span className={styles.policy_terms}>
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
