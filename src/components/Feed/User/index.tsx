import React from 'react';
import * as S from './style';
import UserImg from '../UserImg';
import { useQuery } from 'react-query';
import { PostAuthor } from '../../../interface/post';
import { getUserData } from '../../../api/data';
import { UserDetail } from '../../../interface/user';

export interface UserProps {
  user: UserDetail;
  avatarSize?: 'small';
}

function User({ user, avatarSize }: UserProps) {
  const { data: userData, isLoading, error } = useQuery('usersData', getUserData);
  if (isLoading) {
    return <div>로딩중...</div>;
  }

  const currentUserData = userData.find((data: PostAuthor) => data.id === user.id);

  return (
    <S.User>
      {' '}
      <UserImg size={avatarSize} url={currentUserData?.userImg} />
      <S.UserName>{user.username}</S.UserName>
    </S.User>
  );
}

export default User;
