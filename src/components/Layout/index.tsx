import React from 'react';
import Nav from '../Common/Nav';
import * as S from './style';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <S.Layout>
      <Outlet />
      <Nav />
    </S.Layout>
  );
}

export default Layout;
