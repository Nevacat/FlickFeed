import React from 'react';
import PostItem from '../../Feed/PostItem';
import * as S from './style';
import { useFeed } from '../../../context/FeedContext';
import { Post } from '../../../interface/post';
function PostList() {
  const { posts } = useFeed();

  return (
    <S.PostList>
      {posts &&
        posts.map((post: Post) => (
          <div key={post.id}>
            <PostItem post={post} />
          </div>
        ))}
    </S.PostList>
  );
}

export default PostList;
