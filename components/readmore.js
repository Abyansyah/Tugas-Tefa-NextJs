import { useState } from 'react';

function ReadMore({ content, slice, classname }) {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <>
      <p className={classname}>{showFullContent ? content : `${content.slice(0, slice)}...`}</p>
    </>
  );
}

export default ReadMore;
