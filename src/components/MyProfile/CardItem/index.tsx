import React, { useCallback, useState } from 'react';
import UserPostModal from '../UserPostModal';
import * as S from './style';

type CartItemProps = {
  postImg: string;
};

function index({ postImg }: CartItemProps) {
  const [isUserPostModalOpen, setIsUserPostModalOpen] = useState(false);

  const handleToggleModal = useCallback(() => {
    setIsUserPostModalOpen((prevState) => !prevState);
  }, []);

  return (
    <>
      <S.CardItem>
        <S.ItemButton onClick={handleToggleModal}>
          <S.ItemImage src={postImg} alt="" />
        </S.ItemButton>
      </S.CardItem>

      {isUserPostModalOpen && <UserPostModal postImg={postImg} setIsUserPostModalOpen={setIsUserPostModalOpen} />}
    </>
  );
}

export default React.memo(index);
