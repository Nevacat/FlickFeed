import styled from 'styled-components';
import { RxCross2 } from 'react-icons/rx';

export const ModalOverlay = styled.div`
  width: 100%;
  min-height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 2;
`;

export const Modal = styled.div`
  background: ${({ theme }) => theme.color.navy};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  font-size: 11px;
  overflow: auto;
`;

export const Author = styled.h2`
  font-size: 9px;
`;

export const CommentWrapper = styled.div`
  margin: 10px 0;
  color: white;
`;

export const StyledRxCross2 = styled(RxCross2)`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: 10px;
  right: 10px;
`;
