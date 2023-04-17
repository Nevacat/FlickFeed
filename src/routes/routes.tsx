import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Feed from '../pages/Feed';
function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/Feed' element={<Feed />} />
      </Route>
    </Routes>
  );
}

export default Routers;
