import React, { useEffect, useState } from 'react'
import './styles/App.css'
import Header from './components/Header';
import NewHabit from './testCoponents/NewHabit';
import HabitList from './testCoponents/HabitList';

function App() {

  return (
    <div>
      <HabitList />
    </div>
  )
}

export default App;
