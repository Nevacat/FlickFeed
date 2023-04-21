import styled from 'styled-components';

export const Comments = styled.div`
  overflow: auto;
  border: 1px solid ${({ theme }) => theme.color.gray};
`;

export const Form = styled.form`
  position: relative;
  height: 100px;
`;
export const CommentWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
`;
export const Input = styled.input`
  width: 85%;
  height: 30px;
  border: none;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;
export const Button = styled.button`
  border: none;
  color: #3e729b;
  background: #fff;
  width: 15%;
`;
