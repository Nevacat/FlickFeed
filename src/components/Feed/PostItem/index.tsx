import React from 'react';
import PostImg from '../PostImg';
import User from '../User';
import UserPlace from '../UserPlace';
import UserImg from '../UserImg';
import Like from '../Like';
import CommentIcon from '../CommentIcon';

import * as S from './style';
import { useQuery } from 'react-query';
import axios from 'axios';
function PostItem({ Post }) {
  const getUsers = async () => {
    const res = await axios.get('/users');
    return res.data;
  };
  console.log(getUsers());
  const { username } = Post.author;
  const { isLoading, data: users, error } = useQuery('users', getUsers);
  return (
    <S.PostItem>
      <div style={{ display: 'flex', margin: '5px' }}>
        {' '}
        <UserImg />
        <UserPlace username={username} />
      </div>
      <PostImg />
      <div style={{ display: 'flex', margin: '5px' }}>
        <Like />
        <CommentIcon />
      </div>
    </S.PostItem>
  );
}

export default PostItem;
