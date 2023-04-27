import React, { useCallback, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import { useMutation } from 'react-query';
import UserInfoModal from '../UserInfoModal';
import { getUser } from '../../../api/data';

function index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate, data: user } = useMutation(getUser);

  useEffect(() => {
    mutate();
  }, []);

  const memoizedUser = useMemo(() => user, [user]);

  const memoizedGetUser = useCallback(() => {
    return getUser();
  }, []);

  return (
    <S.UserInfo>
      <S.Image>
        <img
          src={memoizedUser?.user.userImg ? memoizedUser?.user.userImg : 'images/profile_background.jpg'}
          alt={memoizedUser?.username}
        />
      </S.Image>
      <S.Name>{memoizedUser?.user.username}</S.Name>
      <S.StatusMessage>{memoizedUser?.user.userInfo}</S.StatusMessage>

      <S.EditButton type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
        프로필 편집
      </S.EditButton>

      {isModalOpen && <UserInfoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} user={memoizedUser} />}
    </S.UserInfo>
  );
}

export default index;
