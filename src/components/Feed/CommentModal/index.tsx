import React from 'react';
import * as S from './style';
import { StyledRxCross2 } from './style';
function CommentModal({ isCommentModal, setIsCommentModal }) {
  return (
    <S.ModalOverlay>
      <S.Modal>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
        voluptatum vel, id fuga facilis exercitationem. Magnam necessitatibus
        excepturi quos explicabo hic. Velit quas tempore itaque nemo corrupti
        fugiat est similique?
        <StyledRxCross2
          onClick={() => {
            setIsCommentModal(false);
          }}
        />
        {/* <CommentsArea/> */}
      </S.Modal>
    </S.ModalOverlay>
  );
}

export default CommentModal;
