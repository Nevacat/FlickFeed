import React, { useState } from 'react';
import UsersCarousel from '../../components/Feed/UsersCarousel';
import PostList from '../../components/Feed/PostList';
import * as S from './style';
import CommentModal from '../../components/Feed/CommentModal';

function Feed() {
  const [isCommentModal, setIsCommentModal] = useState(false);
  return (
    <S.Feed>
      <UsersCarousel />
      {isCommentModal ? (
        <CommentModal
          isCommentModal={isCommentModal}
          setIsCommentModal={setIsCommentModal}
        />
      ) : null}
      <PostList
        isCommentModal={isCommentModal}
        setIsCommentModal={setIsCommentModal}
      />
    </S.Feed>
  );
}

export default Feed;
