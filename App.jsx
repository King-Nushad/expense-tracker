import { useState } from 'react'
import Transactions from './Transactons'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Transactions />
    </>
  )
}

export default App
