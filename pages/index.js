import Superiority from 'ahmad/components/superiority';
import styles from '../styles/hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Feature from 'ahmad/components/feature';
import RootLayout from 'ahmad/components/Layout';
import Why from 'ahmad/components/why';
import Products from 'ahmad/components/product';

export default function Home() {
  return (
    <>
      <RootLayout tittle="Home Page">
        <main>
          <section className={styles.hero}>
            <div className={styles.container}>
              <div className={styles.max}>
                <div className={styles.left}>
                  <div data-aos="zoom-in-up" className={styles.isi}>
                    <h1 className={styles.heading}>The Ultraportable Drone for the Best Video</h1>
                    <p className={styles.subHeading}>Look up the sky and beautiful world with simple navigation. Just record anmd get a lot memories to share, lighlty and fast like a lightning</p>
                    <button className={styles.btn}>
                      <Link href="/Product">Buy Now</Link>
                    </button>
                  </div>
                </div>
                <div data-aos="zoom-in-up" className={styles.right}>
                  <Image src="/asset/drone2.png" className={styles.gambar} width="500" height="500" alt="BJI" />
                </div>
              </div>
            </div>
          </section>
          <Superiority />
          <Feature />
          <Products/>
          <Why />
        </main>
      </RootLayout>
    </>
  );
}
