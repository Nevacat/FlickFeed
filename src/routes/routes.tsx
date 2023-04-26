import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Layout from '../components/Layout';
import LoginForm from '../components/Login/LoginForm';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import MyProfilePage from '../pages/MyProfile';
import FeedPage from '../pages/Feed';
import ProtectedRouter from './ProtectedRouter';
import CreatePost from '../pages/CreatePost';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRouter />}>
          <Route path="/myProfile" element={<MyProfilePage />} />
          <Route path="/posts" element={<FeedPage />} />
          <Route path="/createPost" element={<CreatePost/>} />"
        </Route>
      </Route>
    </Routes>
  );
}

export default Routers;
