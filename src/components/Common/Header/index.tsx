import React, { useEffect } from 'react';
import { VscChevronLeft } from 'react-icons/vsc';
import { AiFillGithub } from 'react-icons/ai';
import * as S from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import axios from 'axios';

function index() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const logoutHandler = async () => {
    const response = await axios.post('/logout');
    // navigate('/login');
    return response.data;
  };

  return (
    <S.Header>
      <S.BackButton location={location} onClick={() => navigate(-1)}>
        <VscChevronLeft />
      </S.BackButton>
      <S.LogoutButton location={location} onClick={logoutHandler}>
        <BiLogOut />
      </S.LogoutButton>

      <S.Logo location={location}>
        <img src="images/FlickFeed.png" alt="FilckFeed" />
      </S.Logo>

      <S.StyledLink to="https://github.com/Nevacat/FlickFeed">
        <AiFillGithub />
      </S.StyledLink>
    </S.Header>
  );
}

export default index;
