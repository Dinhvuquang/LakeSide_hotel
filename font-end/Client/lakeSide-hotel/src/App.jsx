import { useState } from 'react'
import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AddRoom from './components/room/AddRoom';
import ExistingRoom from './components/room/ExistingRoom';


function App() {
  return (
    <>
  
  <AddRoom/>
  <ExistingRoom/>
      
    </> 
)
}


export default App
