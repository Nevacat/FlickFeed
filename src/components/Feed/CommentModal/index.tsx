import React from 'react';
import * as S from './style';
import { StyledRxCross2 } from './style';
import { useFeed } from '../../../context/FeedContext';
function CommentModal() {
  const { isCommentModal, setIsCommentModal } = useFeed();
  return (
    <S.ModalOverlay>
      <S.Modal>
        <div style={{ color: 'white' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          atque officiis distinctio ullam ipsam excepturi dolorem soluta? Cum
          delectus neque debitis repellendus architecto, repellat est explicabo
          aspernatur nihil quisquam saepe.
        </div>

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
