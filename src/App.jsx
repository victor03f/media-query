import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './css/App.css'
import Flexbox from './components/Flexbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Flexbox />  
    </>
  )
}

export default App
