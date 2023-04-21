import styled from 'styled-components';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';

export const UserPlace = styled.div`
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
