import React, { useEffect, useState } from 'react'
import './styles/App.css'
import Header from './components/Header';
import NewHabit from './components/NewHabit';

function App() {

  return (
    <div className='App'>
      <Header>
        Добро пожаловать!
      </Header>
      <NewHabit />
    </div>
  )
}

export default App;
