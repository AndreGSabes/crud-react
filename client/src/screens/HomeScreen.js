import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import services from '../services';
import UserItem from '../components/UserItem';

const HomeScreen = () => {
  const [users, setUsers] = useState(null);

  const fetchUsers = async () => {
    try {
      const resp = await services.getAllUsers();
      setUsers(resp.data);
    } catch (error) {
      alert('Failed to fetch users');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!users) {
    return (
      <Container>
        <Col>
          <p> Loading users...</p>
        </Col>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        {users.map((userItem) => (
          <UserItem
            key={userItem.id}
            id={userItem.id}
            name={userItem.name}
            username={userItem.username}
            phone={userItem.phone}
            email={userItem.email}
            avatar={userItem.avatar}
          />
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
