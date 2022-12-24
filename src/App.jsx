import { useState } from 'react'

import { ItemListContainer } from './components/container/ItemListContainer'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'
import NavBar from './components/Navbar/NavBar'

function App() {
 
  return (
    <>
      <NavBar />
      <ItemListContainer saludo={'En construcción'} />
    </>
  )
}

export default App
