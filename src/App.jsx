import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route, HashRouter } from 'react-router-dom'
import './App.css'
import Navbar from './assets/Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HashRouter>
     <Navbar></Navbar>
     
     </HashRouter>
    </>
  )
}

export default App
