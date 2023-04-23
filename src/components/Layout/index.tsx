import React from 'react'
import * as S from './style'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <S.Layout>
      <Outlet/>
    </S.Layout>
  )
}

export default Layout