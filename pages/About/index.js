import RootLayout from 'ahmad/components/Layout';
import styles from 'ahmad/styles/about.module.css';
import Link from 'next/link';
import Why from 'ahmad/components/why';
import Image from 'next/image';
import Button from 'ahmad/components/button';
import Comment from 'ahmad/components/comment';

function DetAbout() {
  return (
    <>
      <RootLayout tittle="About page">
        <section className={styles.about}>
          <h1 className={styles.heading1}>About Us</h1>
          <div className={styles.container}>
            <div className={styles.left_content}>
              <Image className={styles.img} src="/asset/about.png" width={500} height={500} alt="about foto"/>
            </div>
            <div className={styles.right_content}>
              <p className={styles.paragraph}>
                At GJI Drone Store, we're passionate about all things drones. Our team of experienced drone pilots and technicians has been providing high-quality products and services to customers for over 5 years. We pride ourselves on
                our commitment to customer satisfaction and our dedication to staying at the forefront of the drone industry. Our mission is to provide our customers with the best selection of drones and accessories at competitive prices.
                Whether you're an amateur drone enthusiast or a professional photographer, we have everything you need to take your drone game to the next level. Our product offerings include a wide range of drones from top brands such as
                DJI, Yuneec, and Parrot. We also carry a variety of accessories, including batteries, propellers, and cases, to help you get the most out of your drone. At GJI Drone Store, we understand that customer service is key to
                building lasting relationships with our customers. That's why we offer free technical support and a 30-day return policy on all products. Our knowledgeable team is always available to answer your questions and help you find
                the right drone for your needs.
              </p>
              <Link href="/Product">
                <Button styles={styles.btn} tittle="See Product"/>
              </Link>
            </div>
          </div>
        </section>
        <Why />
        <Comment/>
      </RootLayout>
    </>
  );
}

export default DetAbout;
