import React from 'react';
import * as S from './style';
import UserImg from '../UserImg';
import { useQuery } from 'react-query';

function User() {
  const { isLoading, data, error } = useQuery();
  return (
    <S.User>
      <div key={User.id} style={{ margin: ' 10px' }}>
        <UserImg />
        <h3 style={{ display: 'flex', justifyContent: 'center' }}>
          {' '}
          {User.username}{' '}
        </h3>
      </div>
    </S.User>
  );
}

export default User;
