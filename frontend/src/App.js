import React,{ useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './css/Style.css';
import testico from './assets/logo512.png';
import Btn from './components/Btn' ;
import ModeToggler from './components/ModeToggler';
import Time from './components/Time';
import Prom from './components/Prom';
import './index.css' ;
import TodoList from './components/Todolist';
import Counter from './components/Counterlist';
import TodoProvider from './components/Todolistprovider';
import Incdec from './components/Incdec';
import { Routes, Route, Link } from 'react-router-dom' ;
import {fetch, Navbar1} from './components/Navbar1';
import Homepage from './components/Homepage';
import Aboutme from './components/Aboutme';
import ReactPlayer from 'react-player' ;
import Video1 from './assets/vms1.mp4';






function Logo(props){
  const gambaruser = <img src={testico} width={355} /> ;
  return gambaruser;
}


function App() {
  const date = new Date()
  const[word, setWord] = React.useState('0%')

    function handleClick() {
      setWord('30%')
    }
  
  return (
    
    <div className='App-header'>
      <div className='App'>
            <nav className='menu'>
            <li><Link to ='/Home' className="menu-item">HomePage</Link></li>
            <li><Link to ='/AboutMe' className="menu-item">AboutMe</Link></li>
            </nav>
            <Routes>
              <Route path = '/Home' element={<Homepage />} />
              <Route path = '/AboutMe' element = {<Aboutme />} />
            </Routes>
        </div>
      <Header  name = "eylan" color ="-"/>
      <div className='App-logo' >
        <Logo />
      </div>
      <body>
          <Main sidename = "-" />
          <Sidebar />
          <Btn />  
          <ModeToggler />
          <div>
            <Prom messeage = {word + 'Discount'}/>
            <center><button className='button-63' onClick={handleClick}> Check Discount </button></center>
          </div>
          <h1 className='code'>
            <Time messeage={date.toLocaleTimeString()} />
          </h1>
          <div>
            <TodoProvider>
              <TodoList />
              <Counter />
            </TodoProvider>
          </div>
          <div>
            <Incdec />
          </div>
          <div>
          <ReactPlayer 
            src = 'Vide'
            playing={false}
            volume={0.5} controls/>
            <video src='Vide' controls/>    
            </div>
      </body>
    </div>
  ) ;
}

export default App ; 
