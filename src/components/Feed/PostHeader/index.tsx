import React, { useState } from 'react';
import * as S from './style';
// import { deletePost } from '../../../api/data';
import { useQuery, useMutation } from 'react-query';
import { StyledEditBtn } from './style';
import { useFeed } from '../../../context/FeedContext';
import { PostComment } from '../PostList/types';
function PostHeader({ post }: PostComment) {
  const { setIsDeleteModal, setDeleteTargetPostId } = useFeed();
  return (
    <S.PostHeader>
      <div>
        {' '}
        <S.UserName> {post.author.username} </S.UserName>
        <S.UserPlace> {post.place} </S.UserPlace>
      </div>

      <StyledEditBtn
        onClick={() => {
          setDeleteTargetPostId(post.id);
          setIsDeleteModal(true);
        }}
      />
    </S.PostHeader>
  );
}

export default PostHeader;
