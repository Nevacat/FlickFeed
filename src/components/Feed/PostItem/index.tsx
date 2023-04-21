import React from 'react';
import PostImg from '../PostImg';
import User from '../User';
import UserPlace from '../UserPlace';
import UserImg from '../UserImg';
import LikeBtn from '../LikeBtn';
import Comments from '../Comments';
import * as S from './style';
import { StyledFaRegComment } from './style';

function PostItem({ post }: any) {
  return (
    <S.PostItem>
      <S.TopSection>
        <UserImg size='small' />
        <UserPlace post={post} />
      </S.TopSection>

      <PostImg />

      <S.Reaction>
        <LikeBtn postId={post.id} />
        <StyledFaRegComment />
      </S.Reaction>

      <Comments postId={post.id} />
    </S.PostItem>
  );
}

export default PostItem;
