import { useMemo } from 'react';
import * as S from './style';
import { axiosInstance } from '../../../api/axios';
import { removeCookie } from '../../../utils/cookies';
import { useNavigate } from 'react-router-dom';

type LogoutConfirmModalProps = {
  setIsLogoutModalOpen: (isLogoutModalOpen: boolean) => void;
};

function index({ setIsLogoutModalOpen }: LogoutConfirmModalProps) {
  const navigate = useNavigate();

  const logoutHandler = useMemo(
    () => async () => {
      const response = await axiosInstance.post('/auth/logout');
      removeCookie('accessToken');
      navigate('/');
      return response.data;
    },
    [navigate]
  );

  return (
    <S.LogoutModal className="logout-modal">
      <S.Message>로그아웃 하시겠습니까?</S.Message>

      <div className="button-group">
        <S.LogoutButton onClick={logoutHandler}>로그아웃</S.LogoutButton>
        <S.CancelButton onClick={() => setIsLogoutModalOpen(false)}>취소</S.CancelButton>
      </div>
    </S.LogoutModal>
  );
}

export default index;
