import styled, { css } from 'styled-components';
interface DeleModalProps {
  toggle: boolean;
}

export const DeleteModalOverlay = styled.div`
  width: 100%;
  min-height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  z-index: 2;
`;
export const DeleteModal = styled.aside<DeleModalProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 180px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  ${({ toggle }) =>
    toggle &&
    css`
      opacity: 1;
      visibility: visible;
    `};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80%;
`;

export const DefaultButton = styled.button`
  padding: 6px 0;
  outline: none;
  border: none;
  border-radius: 4px;
`;

export const SubmitButton = styled(DefaultButton)`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.skyblue};
`;
export const Warning = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;
