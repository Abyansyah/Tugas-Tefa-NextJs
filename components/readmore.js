import { useState } from 'react';
import styles from 'ahmad/styles/product.module.css';

function ReadMore({ content }) {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <>
      <p>{showFullContent ? content : `${content.slice(0, 60)}...`}</p>
      <button className={styles.btn_more} onClick={toggleContent}>
        {showFullContent ? 'Show Less' : 'Read More'}
      </button>
    </>
  );
}

export default ReadMore;