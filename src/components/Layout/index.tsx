import React from 'react';
import Nav from '../Common/Nav';
import * as S from './style';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../MyProfile';

function Layout() {
  const location = useLocation();
  let show = true;
  if (location.pathname === '/register' || location.pathname === '/login') {
    show = false;
  }

  return (
    <S.Layout show={show}>
      <Header />
      <Outlet />
      <Nav />
    </S.Layout>
  );
}

export default Layout;
