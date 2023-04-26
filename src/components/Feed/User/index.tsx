import React from 'react';
import * as S from './style';
import UserImg from '../UserImg';
import { useQuery } from 'react-query';
import { UserType } from '../PostList/types';
import { getUsersImages, getUserData } from '../../../api/data';

function User({ user, avatarSize }: any) {
  const {
    isLoading,
    data: userData,
    error,
  } = useQuery('usersData', getUserData);
  if (isLoading) {
    return <div>로딩중...</div>;
  }

  const currentUserData = userData.find(
    (data: UserType) => data.id === user.id
  );

  return (
    <S.User>
      {' '}
      <UserImg size={avatarSize} url={currentUserData?.userImg} />
      <S.UserName>{user.username}</S.UserName>
    </S.User>
  );
}

export default User;
