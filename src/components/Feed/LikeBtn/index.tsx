import React from 'react';
import * as S from './style';
import { useState } from 'react';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useMutation } from 'react-query';
import axios from 'axios';
import { postLikes } from '../../../api/data';

function LikeBtn({ postId }) {
  const [isLiked, setIsLiked] = useState(false);
  const { mutate, isLikeLoading, error } = useMutation((post) =>
    postLikes(post)
  );

  const toggleLike = () => {
    mutate(postId);
    setIsLiked((prev) => !prev);
  };
  return (
    <>
      <S.LikeBtn onClick={toggleLike}>
        {isLiked ? <RedLikeBtn /> : <AiOutlineHeart />}
      </S.LikeBtn>{' '}
    </>
  );
}

export default LikeBtn;

function RedLikeBtn() {
  return (
    <IconContext.Provider value={{ color: '#fb3958' }}>
      <AiTwotoneHeart />
    </IconContext.Provider>
  );
}
