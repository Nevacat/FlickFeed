import React, { useState, useRef } from 'react';
import User from '../User';
import * as S from './style';
import { useQuery } from 'react-query';
import axios from 'axios';
import MultiCarousel from '../../MultiCarousel';

function UsersCarousel() {
  const getUsers = async () => {
    const res = await axios.get('/users');
    return res.data;
  };
  const { isLoading, data: users, error } = useQuery('users', getUsers);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <S.UsersCarousel>
      <MultiCarousel swipeable arrows={false}>
        {users.Users.map((user: any) => (
          <div key={user.id}>
            <User user={user} avatarSize='big' />
            <h1> {user.username}</h1>
          </div>
        ))}
      </MultiCarousel>{' '}
    </S.UsersCarousel>
  );
}

export default UsersCarousel;
