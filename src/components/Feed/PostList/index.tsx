import React from 'react';
// import styled from 'styled-components';
// import { AiOutlineHeart } from 'react-icons/ai';
import { Posts } from '../../../mocks/constants/PostsData';
import PostItem from '../../Feed/PostItem';

function PostList() {
  return (
    <>
      {Posts.map((Post) => (
        <PostItem key={Post.id} Post={Post} />
      ))}
    </>
  );
}

export default PostList;

// export const LikeBtn = styled(AiOutlineHeart)`
//   width: 25px;
//   height: 25px;
// `;
