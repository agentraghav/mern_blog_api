import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function PostPage() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState();
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

  const getComments = async () => {
    const res = await axios.get('http://localhost:5000/comment');
    console.log(res);
    setComments(res.data);
  };

  const submitComment = async () => {
    const res = await axios.post('http://localhost:5000/comment', {
      comment: comment,
      id: id,
    });
    console.log(res);
    window.location.href = `/${id}`;
  };

  useEffect(() => {
    getPost();
    getComments();
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
        <Col md='12'>
          <Form onSubmit={submitComment}>
            <Form.Group controlId='Comment'>
              <Form.Label>Add Comment</Form.Label>
              <Form.Control
                onChange={(e) => setComment(e.target.value)}
                as='textarea'
                rows={3}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
        {comments.map((val) => (
          <Col md='12'>
            <p>val.comment </p>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default PostPage;
