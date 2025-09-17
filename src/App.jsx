import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
        <div class="header">
            <div class="header-left"></div>
            <div class="header-center">
                <div class="header-center-left"></div>
                <div class="header-center-right"></div>
            </div>
            <div class="header-right"></div>  
        </div>
        
        <div class="main">
            <div class="left">
                <div class="full-column"></div>
            </div>
            <div class="right">
                <div class="upper"></div>
                <div class="lower"></div>  
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-blue"></div>
            <div class="footer-pink"></div>
            <div class="footer-pink"></div>
            <div class="footer-blue"></div>    
        </div>
    </div>
  )
}

export default App
