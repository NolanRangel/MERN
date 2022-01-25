import './App.css';
import BoxGenerator from './components/BoxGeneratorForm'
import React, { useState } from 'react';
import styles from './components/StyleForm.module.css'
import BoxGeneratorForm from './components/BoxGeneratorForm';
import BoxDisplay from './components/BoxDisplay';


function App() {
  const [currentMsg, setCurrentMsg] = useState([]);
  
  const addBox = ( newMessage) => {
    console.log(newMessage);
    if(!newMessage){
      return alert('Please enter a color')
    }
    else{
      const nextColor = newMessage
      console.log(nextColor);
      setCurrentMsg([...currentMsg, nextColor]);
    }
      
  }
  
  return (
      <>
          <BoxGeneratorForm onNewMessage={ addBox } />
          <BoxDisplay message={ currentMsg } />
      </>
  );
}

export default App;
