import styled from 'styled-components';

export const PostBody = styled.div`
  margin-left: 10px;
  margin-top: 10px;
`;

export const Form = styled.form`
  position: relative;
  height: 100px;
`;

export const Content = styled.div`
  height: 40px;
  overflow-y: hidden;
`;
export const CommentWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: -2px;
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.gray};
`;
export const Input = styled.input`
  width: 85%;
  height: 20px;
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
