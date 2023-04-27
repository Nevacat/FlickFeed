import { UserInput } from '../interface/user';
import { axiosImgInstance, axiosInstance } from './axios';
import axios from 'axios';
import { UserDetail } from '../interface/user';
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
    baseURL: 'http://myserver-env.eba-aeguaeip.ap-northeast-2.elasticbeanstalk.com',
  });
  return res.data;
};

export const getUsersImages = async () => {
  const res = await axios.get(`/users`, {
    baseURL: 'http://myserver-env.eba-aeguaeip.ap-northeast-2.elasticbeanstalk.com',
  });
  return res.data.users.map((user: Omit<UserDetail, 'username'>) => ({
    id: user.id,
    userImg: user.userImg,
  }));
};

export const getUserData = async () => {
  const res = await axios.get(`/users`, {
    baseURL: 'http://myserver-env.eba-aeguaeip.ap-northeast-2.elasticbeanstalk.com',
  });
  const userData = res.data.users.map((user: UserDetail) => ({
    id: user.id,
    username: user.username,
    userImg: user.userImg,
  }));
  return userData;
};

export const getMyPost = async () => {
  const res = await axiosInstance.get('/posts/me');
  return res.data;
};

export const getPost = async (postId: string) => {
  const res = await axios.get(`/posts/${postId}`, {
    baseURL: 'http://myserver-env.eba-aeguaeip.ap-northeast-2.elasticbeanstalk.com',
  });
  return res.data;
};

export const getPosts = async () => {
  const res = await axios.get('/posts', {
    baseURL: 'http://myserver-env.eba-aeguaeip.ap-northeast-2.elasticbeanstalk.com',
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

export const postComments = async ({ postId, content }: { postId: string; content: string }) => {
  const res = await axiosInstance.post('/comment', { postId, content });
  return res.data;
};

export const createPost = async (formData: FormData) => {
  const postImg = formData.get('postImg');
  const place = formData.get('place');
  const content = formData.get('content');

  const res = await axiosImgInstance.post('/posts', {
    postImg,
    content,
    place,
  });

  return res.data;
};
