import React, { useState } from 'react';
import UsersCarousel from '../../components/Feed/UsersCarousel';
import PostList from '../../components/Feed/PostList';
import * as S from './style';
import CommentModal from '../../components/Feed/CommentModal';
import DeleteModal from '../../components/Feed/DeleteModal';
import FeedContextProvider, { useFeed } from '../../context/FeedContext';
function Feed() {
  const { isCommentModal, isDeleteModal } = useFeed();
  return (
    <S.Feed>
      <UsersCarousel />
      {isCommentModal && <CommentModal />}
      <PostList />
      {isDeleteModal && <DeleteModal />}
    </S.Feed>
  );
}

export default Feed;
