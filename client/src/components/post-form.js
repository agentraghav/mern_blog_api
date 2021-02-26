import React, { useState } from 'react';
import axios from 'axios';
import { Row, Form, Button } from 'react-bootstrap';

function PostForm() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const fillData = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: 'post',
      url: process.env.FILL_DATA_URL,
      data: {
        title: title,
        content: content,
      },
    });
    window.location.href = '/';
  };

  return (
    <>
      <Row style={{ marginTop: '100px' }}>
        <Form onSubmit={fillData}>
          <Form.Group controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              placeholder='Title'
            />
          </Form.Group>
          <Form.Group controlId='Content'>
            <Form.Label>Write Content</Form.Label>
            <Form.Control
              onChange={(e) => setContent(e.target.value)}
              as='textarea'
              rows={3}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Row>
    </>
  );
}

export default PostForm;
