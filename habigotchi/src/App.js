import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './styles/App.css'
import Title from './components/Title';
import HabitList from './components/HabitList';
import HomePage from './components/HomePage';
import Header from './components/Header';

function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/habits" element={<HabitList />} />
        <Route path='*' element={<HomePage />} />
        {/* <Route path="/game" element={<Game />} />
        <Route path="/tamagochi" element={<Tamagochi />} /> */}
      </Routes>
    </div>
  )
}

export default App;
