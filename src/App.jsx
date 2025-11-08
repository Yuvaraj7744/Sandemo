import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Starting from './Assesments/Starting.jsx';
import Second from './Assesments/Second.jsx';
import Third from './Assesments/Third.jsx';
import Vedio from './Assesments/Vedio.jsx';
import Stars from "./Assesments/Stars.jsx";
import Footer from './Assesments/Footer.jsx';
import Slick from './Assesments/Slick.jsx';
import Specialist from './Assesments/Specialist.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='font-serif'>
    <Starting />
    <Second />
     <Third />
    <Slick />
    <Vedio />
    <Specialist />
    <Stars />
    <Footer />
    </div>
    </>
  )
}

export default App




