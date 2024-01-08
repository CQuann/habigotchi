import React, { useEffect, useState } from 'react'
import './styles/App.css'
import Header from './components/Header';
import HabitList from './components/HabitList';

function App() {

  return (
    <div>
      <Header>Привычки</Header>
      <HabitList />
    </div>
  )
}

export default App;
