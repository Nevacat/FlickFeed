import { useState, useEffect } from 'react';
import * as S from './style';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useMutation } from 'react-query';
import { postLikes } from '../../../api/data';

interface LikeBtnProps {
  postId: string;
}

function LikeBtn({ postId }: LikeBtnProps) {
  const [isLiked, setIsLiked] = useState(() => {
    const likeStatus = localStorage.getItem(`post-${postId}`);
    return likeStatus ? JSON.parse(likeStatus) : false;
  });
  const { mutate, isLoading: isLikeLoading, error } = useMutation((post: string) => postLikes(post));

  useEffect(() => {
    localStorage.setItem(`post-${postId}`, JSON.stringify(isLiked));
  }, [postId, isLiked]);

  const toggleLike = () => {
    mutate(postId);
    setIsLiked((prev: Boolean) => !prev);
  };
  return (
    <>
      <S.LikeBtn onClick={toggleLike}>{isLiked ? <RedLikeBtn /> : <AiOutlineHeart />}</S.LikeBtn>{' '}
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
