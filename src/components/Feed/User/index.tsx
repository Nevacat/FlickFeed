import React from 'react';
import * as S from './style';
import UserImg from '../UserImg';
import { useQuery } from 'react-query';

function User({ user, avatarSize }: any) {
  return (
    <S.User>
      <S.UserImgWrapper>
        {' '}
        <UserImg size={avatarSize} />{' '}
      </S.UserImgWrapper>
    </S.User>
  );
}

export default User;
