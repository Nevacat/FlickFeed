import styled, { css } from 'styled-components';

// export const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   position: fixed;
// `;
export const DeleteModal = styled.aside`
  width: 100%;
  height: 190px;
  background: red;
  position: fixed;
  bottom: -22px;
  left: -12px;
  padding: 16px 12px 12px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px 8px 0 0;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  opacity: 0;
  visibility: hidden;
  z-index: 3;
  transform: translate3d(0, 100%, 0);
  transition: all 200ms ease-in-out;

  ${({ toggle }: any) =>
    toggle &&
    css`
      opacity: 1;
      visibility: visible;
      z-index: 10;
      transform: translate3d(0, 0, 0);
    `};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const inputContainer = styled.div`
  flex-grow: 1;
`;

export const SingleInput = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  color: ${({ theme }) => theme.color.gray};

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  label {
    margin-bottom: 4px;
  }

  input {
    padding: 4px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
`;