import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddCard from './components/AddCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddCard/>
    </>
  )
}

export default App
