import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route, HashRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HashRouter>
     <Navbar></Navbar>
     <Routes>
       
      </Routes>
     </HashRouter>
    </>
  )
}

export default App
