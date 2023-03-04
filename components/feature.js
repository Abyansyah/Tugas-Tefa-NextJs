import Image from 'next/image';
import styles from '../styles/feature.module.css';

function Feature() {
  return (
    <>
      <section className={styles.feature}>
        <div className={styles.container}>
          <div data-aos="zoom-in-left" className={styles.left}>
            <Image src="/asset/feature.png" className={styles.gambar} alt="Drone" width={350} height={350} />
          </div>
          <div data-aos="zoom-in-right" className={styles.right}>
            <h1 className={styles.heading}>Why DJI Phantom 4?</h1>
            <p className={styles.paragraph}>We provide a best self drone easy to use and operate. With <br/> auto pilot, the device will take a beautiful view for the <br/> best of flying operation.</p>
            <div className={styles.detail}>
              <div className={styles.detail_sub}>
                <h1 className={styles.heading1}>4K</h1>
                <p className={styles.paragraph1}>Camera <br/> Resolution</p>
              </div>
              <div className={styles.detail_sub}>
                <h1 className={styles.heading1}>2 TB</h1>
                <p className={styles.paragraph1}>Storage <br/> Capacity</p>
              </div>
              <div className={styles.detail_sub}>
                <h1 className={styles.heading1}>60 m/s</h1>
                <p className={styles.paragraph1}>Super <br/> Max Speed</p>
              </div>
              <div className={styles.detail_sub}>
                <h1 className={styles.heading1}>30 mins</h1>
                <p className={styles.paragraph1}>Long Flight <br/> Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
