import React from 'react';
import { Card, Button, Col, CardDeck } from 'react-bootstrap';
import services from '../services';

const UserItem = ({ id, name, username, email, phone, avatar }) => {
  const deleteUser = async () => {
    try {
      await services.deleteUser(id);
      alert('User deleted!');
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert('Delete user failed!');
    }
  };

  return (
    <Col md="auto" style={{ marginTop: 16 }}>
      <CardDeck>
        <Card className="" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={avatar} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>User: {username} </Card.Text>
            <Card.Text>Email: {email}</Card.Text>
            <Card.Text>Phone: {phone}</Card.Text>
            <Button onClick={deleteUser} variant="danger" block>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </Col>
  );
};

export default UserItem;
