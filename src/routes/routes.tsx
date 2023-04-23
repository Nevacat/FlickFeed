import React from 'react'
import {Routes, Route, Outlet} from "react-router-dom"
import Layout from '../components/Layout'
import LoginForm from "../components/Login/LoginForm"
import LoginPage from "../pages/Login/LoginPage"
import RegisterPage from "../pages/Register/RegisterPage"

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index path="login" element={<LoginPage/>} />
        <Route path="/posts" element={<Layout />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default Routers
