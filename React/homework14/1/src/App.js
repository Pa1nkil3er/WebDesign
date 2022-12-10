import './App.css';
import { useState } from 'react';
import Quote from "./components/quote";
import Likes from "./components/likes";
import Dislikes from "./components/dislikes";
function App() {
  return (
    <div className='quote'>
      <Quote />
      <Likes></Likes>
      <Dislikes></Dislikes>
    </div>
  );
}

export default App;
