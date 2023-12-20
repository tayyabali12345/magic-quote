import { getRoles } from "@testing-library/react";

const users = [
  {
    id: 1,
    first_name: 'john',
    last_name: 'bush',
    gender: 'male',
    email: 'tayyab@gmail.com',
    password: '12345',
    following_ids: [2,3]
  },
  {
    id: 2,
    first_name: 'tayyab',
    last_name: 'ali',
    gender: 'male',
    email: 'tayyabali@gmail.com',
    password: '12345',
    following_ids: [1,3]
  },
  {
    id: 3,
    first_name: 'khan',
    last_name: 'raj',
    gender: 'male',
    email: 'khan@gmail.com',
    password: '12345',
    following_ids: [1],
    role: 'admin'
  }
];
export default users;
