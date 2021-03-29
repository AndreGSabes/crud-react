import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import services from '../services';

const AddScreen = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSumbit = async () => {
    try {
      if (!name || !avatar) {
        alert('Name or photo URL is required!');
        return;
      }
      const user = {
        name,
        username,
        email,
        phone,
        avatar,
      };
      const resp = await services.addUser(user);
      console.log(resp);
      alert('User was added successfully!');
      history.replace('/');
    } catch (error) {
      console.log(error);
      alert('Failed to add user!');
    }
  };

  return (
    <Container style={{ padding: 16 }}>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name..."
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user name..."
                onChange={(e) => setUserName(e.target.value)}
                value={username}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter e-mail..."
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone number..."
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Photo URL*</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://example.com/photo.jpg ..."
                onChange={(e) => setAvatar(e.target.value)}
                value={avatar}
              />
            </Form.Group>
            <Form.Group>
              <Button variant="primary" onClick={handleSumbit} style={{ marginRight: 16 }}>
                Add User
              </Button>
              <Button variant="danger" href="/">
                Cancel
              </Button>
            </Form.Group>
            <Form.Group></Form.Group>
          </Form>
          <p>* Indicates required field</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AddScreen;
