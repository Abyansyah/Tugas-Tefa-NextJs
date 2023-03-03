import RootLayout from 'ahmad/components/Layout';
import styles from 'ahmad/styles/about_page.module.css';
import Image from 'next/image';
import About from 'ahmad/components/about';

function DetAbout() {
  return (
    <>
      <RootLayout>
        <section className={styles.about}>
          <div className={styles.container}>
            <h1 className={styles.heading}>Why Choose us?</h1>
            <div className={styles.why}>
              <div className={styles.why_content}>
                <Image className={styles.img} src="/asset/icon/truck.svg" width={50} height={50} />
                <p className={styles.ket}>Free shipping on orders over IDR Rp 2.000.000</p>
              </div>
              <div className={styles.why_content}>
                <Image className={styles.img} src="/asset/icon/payment.svg" width={50} height={50} />
                <p className={styles.ket}>We accept credit cards, PayPal, and bank wires</p>
              </div>
              <div className={styles.why_content}>
                <Image className={styles.img} src="/asset/icon/chat.svg" width={50} height={50} />
                <p className={styles.ket}>Order Service: Live Chat</p>
              </div>
            </div>
          </div>
        </section>
        <About />
      </RootLayout>
    </>
  );
}

export default DetAbout;
