import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import MyProfile from '../pages/MyProfile';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/myProfile" element={<MyProfile />} />
      </Route>
    </Routes>
  );
}

export default Routers;
