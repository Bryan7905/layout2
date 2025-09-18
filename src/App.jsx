import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
    return <div class="header">
        <Header_content/>
        <Header_content2/>
        <Header_content/>
    </div>
}

function Header_content(){
    return <div class="header-content"></div>
}

function Header_content2(){
    return <div class="header-content2">
        <Header_content2_center name="Bryan"/>
        <Header_content2_center name="Galang"/>
    </div>
}

function Header_content2_center(props){
    return <div class="header-content2-center">{props.name}</div>
}

function Main(){
    return <div class="main">
        <Main_container/>
        <Main_container2/>
    </div>
}

function Main_container(){
    return <div class="main-container"></div>
}

function Main_container2(){
    return <div class="main-container2">
        <Main_container_content2/>
        <Main_container_content2/>
    </div>
}

function Main_container_content2(){
    return <div class="main-container-content2"></div>
}

function Footer_content(){
    return <div class="footer-content"></div>
}

function Footer_content2(props){
    return <div class="footer-content2">{props.text}</div>
}

function Footer(){
    return <div class="footer">
        <Footer_content/>
        <Footer_content2 text="C-PCIT9"/>
        <Footer_content2 text="IT3A"/>
        <Footer_content/>
    </div>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default App
