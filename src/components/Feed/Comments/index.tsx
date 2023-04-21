import axios from 'axios';
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import * as S from './style';
import { useState } from 'react';
import { useMutation } from 'react-query';

function Comments({ postId }) {
  const queryClient = useQueryClient();
  const [content, setContent] = useState('');

  const getPost = async () => {
    const res = await axios.get(`/posts/${postId}`);
    return res.data;
  };
  const {
    isCommentLoading,
    data: postComments,
    error,
  } = useQuery(['post', postId], getPost, {
    select: (data) => data.comments,
  });
  if (isCommentLoading) {
    return <div>Loading...</div>;
  }

  const { mutate, isLoading } = useMutation(
    (formData) => axios.post('/comment', formData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['comments', postId]);
        setContent('');
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ postId, content });
  };

  return (
    <S.Comments>
      <S.Form onSubmit={handleSubmit}>
        본문 API 받으면 작성 예정
        <S.CommentWrapper>
          {' '}
          {/* {postComments &&
            postComments.map((postComment) => (
              <div key={postComment.id}>
                <span>{postComment.author.username}</span>:
                <span>{postComment.content}</span>
              </div>
            ))} */}
          <S.Input
            type='text'
            value={content}
            placeholder='댓글 달기...'
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <S.Button type='submit' disabled={isLoading}>
            {isLoading ? '작성중' : '게시'}
          </S.Button>
        </S.CommentWrapper>
      </S.Form>
    </S.Comments>
  );
}

export default Comments;
