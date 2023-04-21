import React from 'react';
import Nav from '../Common/Nav';
import * as S from './style';
import { Outlet } from 'react-router-dom';
import { Header } from '../MyProfile';

function Layout() {
  return (
    <S.Layout>
      <Header />
      <Outlet />
      <Nav />
    </S.Layout>
  );
}

export default Layout;
