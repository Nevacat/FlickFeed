import React from 'react';
import * as S from './style';
import { StyledRxCross2 } from './style';
import { useFeed } from '../../../context/FeedContext';
function CommentModal() {
  const { isCommentModal, setIsCommentModal } = useFeed();
  return (
    <S.ModalOverlay>
      <S.Modal>
        <div style={{ color: 'white' }}></div>

        <StyledRxCross2
          onClick={() => {
            setIsCommentModal(false);
          }}
        />
      </S.Modal>
    </S.ModalOverlay>
  );
}

export default CommentModal;
