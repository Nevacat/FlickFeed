// API 를 불러오는 곳

import { UserInput } from '../interface/user';
import { axiosInstance } from './axios';

export const getUser = async () => {
  const response = await axiosInstance.post('/auth/me');
  return response.data;
};

export const getPostsByUser = async () => {
  const response = await axiosInstance.get('/posts/me');
  return response.data;
};

export const editUser = async (input: UserInput) => {
  const response = await axiosInstance.put('/users', input);
  return response.data;
};
