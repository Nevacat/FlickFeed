import styled from 'styled-components';
import { FaRegComment } from 'react-icons/fa';

export const PostItem = styled.div`
  margin: 15px;
  overflow: visible;
`;
export const TopSection = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
`;

export const Reaction = styled.div`
  display: flex;
  height: 30px;
  width: 200px;
  padding: 4px;
  align-items: center;
`;
export const StyledFaRegComment = styled(FaRegComment)`
  width: 21px;
  height: 21px;
  margin-left: 20px;
  color: #000;
  cursor: pointer;
`;
export const PostImg = styled.div`
  height: 203px;
  border-radius: 15px;
  background-size: cover;
  background-position: 20% 50%;
`;
