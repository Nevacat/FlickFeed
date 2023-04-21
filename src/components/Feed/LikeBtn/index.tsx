import React from 'react';
import * as S from './style';
import { useState } from 'react';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useMutation } from 'react-query';
import axios from 'axios';

function LikeBtn({ postId }) {
  // const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const { mutate, isLikeLoading, error } = useMutation(() =>
    axios.post(`/posts/${postId}`)
  );

  const toggleLike = () => {
    if (isLiked) {
      // setLike(like - 1);
      setIsLiked(false);
      mutate();
    } else {
      // setLike(like + 1);
      setIsLiked(true);
      mutate();
    }
  };
  return (
    <>
      {/* <S.Like> */}
      <S.LikeBtn onClick={toggleLike}>
        {isLiked ? <RedLikeBtn /> : <AiOutlineHeart />}
      </S.LikeBtn>{' '}
      {/* </S.Like> */}
      {/* <span>{like}</span>likes{' '} */}
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
