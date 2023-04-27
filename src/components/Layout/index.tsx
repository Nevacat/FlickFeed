import React from 'react';
import Nav from '../Common/Nav';
import * as S from './style';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../MyProfile';

function Layout() {
  const location = useLocation();

  return (
    <S.Layout>
      {!(location.pathname === '/register' || location.pathname === '/') && (
        <>
          <Nav />
          <Header />
        </>
      )}
      <Outlet />
    </S.Layout>
  );
}

export default Layout;
