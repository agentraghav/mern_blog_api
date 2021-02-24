import React, { useEffect } from 'react';
import axios from 'axios';
function PostForm() {
  const fillData = async () => {
    const res = await axios.post('http://localhost:5000/posts', {
      title: 'temporary',
      tags: ['css'],
      html: '<p>Till Know</p>',
    });
    console.log(res);
  };

  useEffect(() => {
    fillData();
  });

  return (
    <>
      <div>
        <h1>Temp form post check db</h1>
      </div>
    </>
  );
}

export default PostForm;
