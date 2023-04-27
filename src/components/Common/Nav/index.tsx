import React, { useCallback, useEffect, useMemo } from 'react';
import { RiHome5Fill } from 'react-icons/ri';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import * as S from './style';
import { useMutation } from 'react-query';
import { getUser } from '../../../api/data';

function index() {
  const { mutate, data: user } = useMutation(getUser);

  useEffect(() => {
    mutate();
  }, []);

  const memoizedUser = useMemo(() => user, [user]);

  const memoizedGetUser = useCallback(() => {
    return getUser();
  }, []);

  return (
    <S.Gnb>
      <S.StyledLink to="/posts">
        <RiHome5Fill />
      </S.StyledLink>

      <S.StyledLink to="/createPost">
        <AiOutlinePlusCircle />
      </S.StyledLink>

      <S.StyledLink to="/myProfile">
        <img src={memoizedUser?.user.userImg ? memoizedUser?.user.userImg : 'images/profile_background.jpg'} alt="" />
      </S.StyledLink>
    </S.Gnb>
  );
}

export default index;
