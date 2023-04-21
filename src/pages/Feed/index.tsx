import React from 'react';
import UsersCarousel from '../../components/Feed/UsersCarousel';
import PostList from '../../components/Feed/PostList';
import * as S from './style';

function Feed() {
  return (
    <S.Feed>
      <UsersCarousel />
      <PostList />
    </S.Feed>
  );
}

export default Feed;
