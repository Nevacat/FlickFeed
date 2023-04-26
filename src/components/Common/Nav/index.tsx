import React from 'react';
import { RiHome5Fill } from 'react-icons/ri';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import * as S from './style';

function index() {
  return (
    <S.Gnb>
      <S.StyledLink to="/posts">
        <RiHome5Fill />
      </S.StyledLink>

      <S.StyledLink to="/createPost">
        <AiOutlinePlusCircle />
      </S.StyledLink>

      <S.StyledLink to="/myProfile">
        <img src="images/profile_background.jpg" alt="" />
      </S.StyledLink>
    </S.Gnb>
  );
}

export default index;
