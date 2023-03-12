import styles from 'ahmad/styles/comment.module.css';
import data from 'ahmad/data/comment.json';
import Image from 'next/image';

function Comment() {
  return (
    <section className={styles.comment}>
      <div className={styles.container}>
        <h1>
          What Our “Pilots <br /> Are Saying?
        </h1>
        <div className={styles.card}>
          {data.map((item, index) => (
            <div className={styles.card_item} key={index}>
              <div className={styles.profile}>
                <Image src={item.img} width={60} height={60} />
                <div className={styles.head}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.job}>{item.job}</p>
                </div>
              </div>
              <p className={styles.par}>{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Comment;
