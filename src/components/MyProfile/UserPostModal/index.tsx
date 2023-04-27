import React, { useCallback } from 'react';
import * as S from './style';

type UserPostModalProps = {
  postImg: string;
  setIsUserPostModalOpen: (isUserPostModalOpen: boolean) => void;
};

function index({ postImg, setIsUserPostModalOpen }: UserPostModalProps) {
  const handleCloseModal = useCallback(() => {
    setIsUserPostModalOpen(false);
  }, [setIsUserPostModalOpen]);

  return (
    <S.UserPostModalOverlay onClick={handleCloseModal}>
      <S.UserPostModal>
        <S.UserPostModalImage src={postImg} alt="" />
      </S.UserPostModal>
    </S.UserPostModalOverlay>
  );
}

export default index;
