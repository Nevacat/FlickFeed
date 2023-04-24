import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Feed from '../pages/Feed';
import MyProfile from '../pages/MyProfile';
import axios from 'axios';

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/myProfile' element={<MyProfile />} />
        <Route path='/Feed' element={<Feed />} />
      </Route>
    </Routes>
  );
}

export default Routers;
