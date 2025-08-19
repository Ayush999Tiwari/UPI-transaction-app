/*At first run npm install react-router-dom in frontend folder because its the library that lets you
hndle page naviagation in React*/
import {useState} from 'react'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import {Signup} from "./Pages/Signup";
import {Signin} from "./Pages/Signin";
import {Dashboard} from "./Pages/Dashboard";
import {SendMoney} from "./Pages/SendMoney";
function App() {
  return (
    <div>
        <BrowserRouter>
           <Routes> 
              <Routes path = "/Signup" element = {<Signup/>}/>
              <Routes path = "/Signin" element = {<Signin/>}/>
              <Routes path = "/Dashboard" element = {<Dashboard/>}/>
              <Routes path = "/SendMoney" element = {<SendMoney/>}/>
            </Routes>        
        </BrowserRouter>
    </div>
  )
}

export default App
