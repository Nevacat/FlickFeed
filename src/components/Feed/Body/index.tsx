import React from 'react';
import PostList from '../PostList';
import UsersCarousel from '../UsersCarousel';
import * as S from './style';
function Body() {
  return (
    <S.Body>
      <UsersCarousel />
      <PostList />
    </S.Body>
  );
}

export default Body;
