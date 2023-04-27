import styled, { css } from 'styled-components';

const common = css`
  width: 100%;
  padding: 7px 10px;
  margin-top: 12px;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.16);
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.navy};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.lightPurple};
  }
`;

export const Input = styled.input`
  ${common}
  height:24px;
`;

export const TextArea = styled.textarea`
  ${common}
  height: 120px;
`;
export const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 90px 22px 0;
  position: relative;
`;
