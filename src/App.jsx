import React from 'react';
import { Routes, Route, json } from 'react-router-dom';

import MainLayout from './Layouts/MainLayut';
import Home from './pages/Home';
import MyEntries from './pages/MyEntries';
import Profile from './pages/Profile';
import Test from './pages/Test';

function App() {
  //http://93.95.97.167:8083 авторизация
  //http://93.95.97.167:8081 поиск
  //http://93.95.97.167:8080 создание/удаление услуги
  //http://93.95.97.167:8084 бронирование

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/myentries' element={<MyEntries />} />

          <Route path='/test' element={<Test />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
