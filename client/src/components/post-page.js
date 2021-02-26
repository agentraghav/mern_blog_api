import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function PostPage() {
  const { id } = useParams();

  const [comment, setComment] = useState();
  const [article, setArticle] = useState({});
  const getPost = async () => {
    const res = await axios.get(process.env.POST_URL);

    setArticle(res.data);
  };

  const deletePost = async () => {
    const res = await axios.delete(process.env.POST_URL);
    window.location.href = '/';
  };

  const submitComment = async () => {
    const res = await axios.post(process.env.COMMENT_URL, {
      comment: comment,
    });

    window.location.href = `/${id}`;
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
        <Col md='12'>
          {article.comments &&
            article.comments.map((com) => {
              <div>
                <p>{com}</p>
              </div>;
            })}
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
      </Row>
    </>
  );
}

export default PostPage;
