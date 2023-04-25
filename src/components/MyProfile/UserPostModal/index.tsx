import React from 'react';
import * as S from './style';

type UserPostModalProps = {
  postImg: string;
  setIsUserPostModalOpen: (isUserPostModalOpen: boolean) => void;
};

function index({ postImg, setIsUserPostModalOpen }: UserPostModalProps) {
  return (
    <S.UserPostModalOverlay onClick={() => setIsUserPostModalOpen(false)}>
      <S.UserPostModal>
        <S.UserPostModalImage src={postImg} alt="" />
      </S.UserPostModal>
    </S.UserPostModalOverlay>
  );
}

export default index;
