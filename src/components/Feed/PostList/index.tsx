import React from 'react';
import PostItem from '../../Feed/PostItem';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Post } from './types';
import * as S from './style';
function PostList() {
  const getPosts = async () => {
    const res = await axios.get('/posts');
    return res.data;
  };
  const { isLoading, data: posts, error } = useQuery('posts', getPosts);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <S.PostList>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <h1>
            <PostItem post={post} />
          </h1>
        </div>
      ))}
    </S.PostList>
  );
}

export default PostList;
