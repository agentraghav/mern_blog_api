import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Card } from 'react-bootstrap';
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
    <Row style={{ marginTop: '100px' }}>
      {posts.map((post) => (
        <Card key={post._id} style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              {post.createdAt}
            </Card.Subtitle>
            <Card.Text>{post.content}</Card.Text>
            <Card.Link href={`/posts/${post._id}`}>Post Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
}

export default PostList;
