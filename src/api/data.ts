// API 를 불러오는 곳

import { UserInput } from '../interface/user';
import { axiosInstance } from './axios';
import axios from 'axios';
import { postCommentsParams } from '../../src/components/Feed/PostList/types';

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

export const getUsers = async () => {
  const res = await axios.get('/users', {
    baseURL:
      'http://myserver-env.eba-aeguaeip.ap-northeast-2.elasticbeanstalk.com',
  });
  return res.data;
};

export const getUsersImages = async () => {
  const res = await axios.get(`/users`, {
    baseURL:
      'http://myserver-env.eba-aeguaeip.ap-northeast-2.elasticbeanstalk.com',
  });
  return res.data.users.map((user) => ({
    id: user.id,
    userImg: user.userImg,
  }));
};

export const getUserData = async () => {
  const res = await axios.get(`/users`, {
    baseURL:
      'http://myserver-env.eba-aeguaeip.ap-northeast-2.elasticbeanstalk.com',
  });

  const userData = res.data.users.map((user) => ({
    id: user.id,
    username: user.username,
    userImg: user.userImg,
  }));
  return userData;
};

export const getPost = async (postId) => {
  const res = await axios.get(`/posts/${postId}`, {
    baseURL:
      'http://myserver-env.eba-aeguaeip.ap-northeast-2.elasticbeanstalk.com',
  });
  return res.data;
};

export const getPosts = async () => {
  const res = await axios.get('/posts', {
    baseURL:
      'http://myserver-env.eba-aeguaeip.ap-northeast-2.elasticbeanstalk.com',
  });
  return res.data;
};

export const getComments = async (postId: string) => {
  const res = await axiosInstance.get(`/posts/${postId}`);
  return res.data;
};

export const postLikes = async (postId: string) => {
  const res = await axiosInstance.post(`/posts/${postId}`);
  return res.data;
};

export const deletePost = async (postId: string) => {
  const res = await axiosInstance.delete(`/posts/${postId}`);
  return res.data;
};

export const postComments = async ({ postId, content }) => {
  const res = await axiosInstance.post('/comment', { postId, content });
  return res.data;
};
