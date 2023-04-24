import React from 'react';
import UsersCarousel from '../../components/Feed/UsersCarousel';
import PostList from '../../components/Feed/PostList';
import * as S from './style';
import Body from '../../components/Feed/Body';

function Feed() {
  return (
    <S.Feed>
      <Body>
        <UsersCarousel />
        <PostList />{' '}
      </Body>
    </S.Feed>
  );
}

export default Feed;
