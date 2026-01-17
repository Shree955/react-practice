import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FaStar} from "react-icons/fa";
import StarRatings from './Components/star-ratings/index.';
import QRCodeGenerator from './Components/QR generator';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <StarRatings/>
     <QRCodeGenerator/>
    </>
  )
}

export default App
