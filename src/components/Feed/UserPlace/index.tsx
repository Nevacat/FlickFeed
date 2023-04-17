import React from 'react';
import * as S from './style';
import styled from 'styled-components';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { Posts } from '../../../mocks/constants/PostsData';
function UserPlace({ username }) {
  return (
    <S.UserPlace>
      <>
        <div>
          {' '}
          <h3> {username} </h3>
          <h3>seoul</h3>{' '}
        </div>

        <StyledEditBtn />
      </>
    </S.UserPlace>
  );
}

export default UserPlace;

const StyledEditBtn = styled(HiOutlineDotsCircleHorizontal)`
  width: 20px;
  height: 20px;
`;
