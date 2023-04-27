import styled from 'styled-components';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';

export const PostHeader = styled.div`
  width: calc(100% - 50px);
  height: 50px;
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledEditBtn = styled(HiOutlineDotsCircleHorizontal)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const UserName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 600;
  color: ${({ theme }) => theme.color.navy};
`;

export const UserPlace = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.gray};
`;
