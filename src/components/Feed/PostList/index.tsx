import React from 'react';
import PostItem from '../../Feed/PostItem';
import { useQuery } from 'react-query';
import { getPosts } from '../../../api/data';
import { Post } from './types';
import * as S from './style';
import { useFeed } from '../../../context/FeedContext';
function PostList() {
  const { posts } = useFeed();
  const {
    isLoading,
    data: postImages,
    error,
  } = useQuery('posts', getPosts, {
    select: (posts) => posts.map((post: Post) => post.id),
  });

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
