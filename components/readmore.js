import { useState } from 'react';

function ReadMore({ content, slice, classname }) {
  const [showFullContent] = useState(false);

  return (
    <>
      <p className={classname}>{showFullContent ? content : `${content.slice(0, slice)}...`}</p>
    </>
  );
}

export default ReadMore;
