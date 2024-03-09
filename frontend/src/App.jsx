import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Router from './components/Router'
import Profile from './components/Profile'
import Sidebar from './components/sidebar'
import News from './components/News'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router/>
    {/* <Profile></Profile> */}
 </>
  )
}

export default App
