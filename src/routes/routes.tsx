import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Layout from '../components/Layout';
import LoginForm from '../components/Login/LoginForm';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import MyProfilePage from '../pages/MyProfile';
import FeedPage from '../pages/Feed';
import ProtectedRouter from './ProtectedRouter';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectedRouter />}>
        <Route element={<Layout />}>
          <Route path="myProfile" element={<MyProfilePage />} />
          <Route path="posts" element={<FeedPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Routers;
