import Image from 'next/image';
import styles from 'ahmad/styles/detail.module.css';

function DetailImg({ data, tab, myRef }) {
  return (
    <>
      <div className={styles.column_bottom} ref={myRef}>
        {data &&
          Object.entries(data).map(([key, value]) => (
            <div className={styles.column_content} key={key}>
              <Image className={styles.img_bottom} src={value} width={100} height={100} alt="foto" onClick={() => tab(key)} />
            </div>
          ))}
      </div>
    </>
  );
}

export default DetailImg;
