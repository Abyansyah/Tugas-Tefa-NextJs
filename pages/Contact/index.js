import React from 'react';
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import styles from '../../styles/kontak.module.css';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RootLayout from 'ahmad/components/Layout';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const notify = () =>
    toast.success('Pesan berhasil dikirim!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Message: message,
    };
    axios.post('https://sheet.best/api/sheets/b097a330-a78a-46d4-b54a-669f920a9f5d', data).then((res) => {
      setName('');
      setEmail('');
      setMessage('');
      notify();
    });
  };
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' });
  });
  return (
    <>
      <RootLayout tittle="Contact Page">
        <section className={styles.contact} id="contact">
          <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
          <div className={styles.contact_tittle} data-aos="fade-down">
            <h2>
              {' '}
              Contact <span>Us</span>
            </h2>
            <p>Contact us.</p>
            <div className={styles.contact_line}></div>
          </div>
          <div className={styles.contact_container}>
            <div className={styles.contact_row}>
              <div data-aos="fade-right" className={styles.contact_column}>
                <div className={styles.contact_widget}>
                  <div className={styles.contact_widget_item}>
                    <div className={styles.icon}>
                      <i>
                        <FaLocationArrow />
                      </i>
                    </div>
                    <div className={styles.contact_text}>
                      <h5>Address</h5>
                      <p>Kediri, Jawa TImur, Indonesia</p>
                    </div>
                  </div>
                  <div className={styles.contact_widget_item}>
                    <div className={styles.icon}>
                      <i>
                        <FaPhoneAlt />
                      </i>
                    </div>
                    <div className={styles.contact_text}>
                      <h5>Contact Us</h5>
                      <p>+86 0755 26656677</p>
                    </div>
                  </div>
                  <div className={styles.contact_widget_item}>
                    <div className={styles.icon}>
                      <i>
                        <FaEnvelope />
                      </i>
                    </div>
                    <div className={styles.contact_text}>
                      <h5>Mail</h5>
                      <p>GJI@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left" className={styles.contact_column}>
                <div className={styles.contact_form}>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <input type="text" name="user_name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} required />
                    <input type="email" name="user_email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                    <textarea placeholder="Comment" name="message" onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
                    <button type="submit" className={styles.site_btn}>
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RootLayout>
    </>
  );
}

export default Contact;
