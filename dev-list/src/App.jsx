import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddCard from './components/AddCard'

function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <>
      <AddCard/>
    </>
  )
}

export default App
