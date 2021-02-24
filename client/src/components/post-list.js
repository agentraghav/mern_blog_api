import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await axios.get('http://localhost:5000/posts/');
      const data = res.data;
      setPosts(data);
    }
    getData();
    console.log(posts);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h1> {post.title} </h1>
        </div>
      ))}
    </div>
  );
}

export default PostList;
