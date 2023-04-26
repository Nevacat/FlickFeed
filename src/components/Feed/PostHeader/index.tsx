import React, { useState } from 'react';
import * as S from './style';
// import { deletePost } from '../../../api/data';
import { useQuery, useMutation } from 'react-query';
import { StyledEditBtn } from './style';
import { useFeed } from '../../../context/FeedContext';
import { Post } from '../../../interface/post';
interface PostHeaderProps {
  post: Post;
}

function PostHeader({ post }: PostHeaderProps) {
  console.log(post);
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
