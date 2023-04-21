import React from 'react';
import * as S from './style';
import UserImg from '../UserImg';
import { useQuery } from 'react-query';

function User({ user, avatarSize }: any) {
  return (
    <S.User>
      <div key={user.id}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {' '}
          <UserImg size={avatarSize} />{' '}
        </div>

        <h3 style={{ display: 'flex', justifyContent: 'center' }}></h3>
      </div>
    </S.User>
  );
}

export default User;
