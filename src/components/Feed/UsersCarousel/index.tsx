import React from 'react';
import User from '../User';
import * as S from './style';
import { useQuery } from 'react-query';
import { getUsers, getUsersImages, getUserData } from '../../../api/data';
import MultiCarousel from '../../MultiCarousel';
import { UserType } from '../PostList/types';
function UsersCarousel() {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery('users', getUsers, {
    select: (payload) => payload.users,
  });

  const {
    isLoading: isLoadingUserdata,
    data: userData,
    error: userDataError,
  } = useQuery('usersData', getUserData);
  if (isLoading || isLoadingUserdata) {
    return <div>로딩중...</div>;
  }

  const userList = users.map((user: UserType) => {
    const matchingUserData = userData.find(
      (data: UserType) => data.id === user.id
    );
    return { ...user, ...matchingUserData };
  });
  return (
    <S.UsersCarousel>
      <MultiCarousel swipeable arrows={false}>
        {userList.map((user: any) => (
          <div key={user.id}>
            <User user={user} avatarSize='big' />
          </div>
        ))}
      </MultiCarousel>{' '}
    </S.UsersCarousel>
  );
}

export default UsersCarousel;
