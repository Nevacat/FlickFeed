import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../utils/cookies';
import { AppDispatch, RootState } from '../store';
import { verify } from '../store/slices/authSlice';

function ProtectedRouter() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const token = getCookie('accessToken');
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(verify());
    } else {
      alert('로그인이 필요한 서비스입니다');
      navigate('/');
    }
  }, [token]);

  if (isAuthenticated === 'FAILED') {
    alert('로그인이 필요한 서비스입니다');
    navigate('/');
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedRouter;
