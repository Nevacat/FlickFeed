import axios from 'axios';
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import * as S from './style';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { getPost, getPosts } from '../../../api/data';

function Body({ postId, postContent }) {
  const queryClient = useQueryClient();
  const [content, setContent] = useState('');

  const {
    isCommentLoading,
    data: postComments,
    error,
  } = useQuery(['post', postId], () => getPost(postId), {
    select: (data) => data.comments,
    enabled: !!postId,
  });
  if (isCommentLoading) {
    return <div>로딩중입니다</div>;
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
    <S.Body>
      {' '}
      <div> {postContent} </div>
      <S.Form onSubmit={handleSubmit}>
        <S.CommentWrapper>
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
    </S.Body>
  );
}

export default Body;
{
  (' ');
}
{
  /* {postComments &&
            postComments.map((postComment) => (
              <div key={postComment.id}>
                <span>{postComment.author.username}</span>:
                <span>{postComment.content}</span>
              </div>
            ))} */
}
