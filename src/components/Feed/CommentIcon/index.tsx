import React from 'react';
import { FaRegComment } from 'react-icons/fa';
import styled from 'styled-components';
function CommentIcon() {
  return (
    <div>
      <StyledCommentIcon />
    </div>
  );
}

export default CommentIcon;

const StyledCommentIcon = styled(FaRegComment)`
  width: 20px;
  height: 20px;
`;
