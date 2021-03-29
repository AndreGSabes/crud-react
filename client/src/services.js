import axios from 'axios';
const BASE_BACKEND_URL = 'http://localhost:9004';

export default {
  getAllUsers: () => axios.get(`${BASE_BACKEND_URL}/users`),
  addUser: (user) => axios.post(`${BASE_BACKEND_URL}/users`, user),
  deleteUser: (userId) => axios.delete(`${BASE_BACKEND_URL}/users/${userId}`),
};
