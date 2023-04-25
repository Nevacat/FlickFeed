import axios from 'axios';
import React, { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import * as S from './style';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { postComments } from '../../../api/data';

function PostBody({ postId, postContent }) {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState('');
  const { mutate, isLoading } = useMutation(
    (formData) =>
      postComments({ postId: formData.postId, content: formData.comment }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['comments', postId]);
        setComment('');
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ postId, comment });
  };

  return (
    <S.PostBody>
      {' '}
      <S.Form onSubmit={handleSubmit}>
        {' '}
        <S.Content> {postContent} </S.Content>
        <S.CommentWrapper>
          <S.Input
            type='text'
            value={comment}
            placeholder='댓글 달기...'
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <S.Button type='submit'>게시</S.Button>
        </S.CommentWrapper>
      </S.Form>
    </S.PostBody>
  );
}

export default PostBody;
