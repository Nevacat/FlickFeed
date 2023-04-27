import React from 'react';
import User from '../User';
import * as S from './style';
import { useQuery } from 'react-query';
import { getUsers, getUserData } from '../../../api/data';
import MultiCarousel from '../../MultiCarousel';
import { PostAuthor } from '../../../interface/post';
import Loading from '../../Common/Loading';
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
    return <Loading />;
  }

  const userList = users.map((user: PostAuthor) => {
    const matchingUserData = userData.find(
      (data: PostAuthor) => data.id === user.id
    );
    return { ...user, ...matchingUserData };
  });
  return (
    <S.UsersCarousel>
      <MultiCarousel swipeable arrows={false}>
        {userList.map((user: any) => (
          <div key={user.id}>
            <User user={user} />
          </div>
        ))}
      </MultiCarousel>{' '}
    </S.UsersCarousel>
  );
}

export default UsersCarousel;
