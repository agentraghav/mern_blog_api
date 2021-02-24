import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function PostPage() {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const getPost = async () => {
    const res = await axios.get(`http://localhost:5000/posts/${id}`);

    setArticle(res.data);
  };

  const deletePost = async () => {
    const res = await axios.delete(`http://localhost:5000/posts/${id}`);
    console.log(res);
    window.location.href = '/';
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <Row style={{ marginTop: '100px' }}>
        <Col md='12'>
          <h2>{article.title}</h2>
          <span>
            <i
              onClick={deletePost}
              className='fa fa-trash '
              style={{ fontSize: '18px' }}></i>
          </span>
        </Col>
        <Col md='12'>
          <h4>{article.createdAt}</h4>
        </Col>
        <Col md='12'>
          <h4>{article.content}</h4>
        </Col>
      </Row>
    </>
  );
}

export default PostPage;
