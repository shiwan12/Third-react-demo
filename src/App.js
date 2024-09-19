import React, { useState} from 'react'

import './index.css'

const App=()=> {
  const [diceNumber1,setDiceNumber1]=useState(5)
  const [diceNumber2,setDiceNumber2]=useState(2)
  const refreshDice=()=>{
    const ranno1=Math.floor(Math.random()*6)+1
    setDiceNumber1(ranno1)
    const ranno2=Math.floor(Math.random()*6)+1
    setDiceNumber2(ranno2)
  }
  return (
    <div>
      <img src ={require (`./assets/${diceNumber1}.png`)}/>
      <img src ={require (`./assets/${diceNumber2}.png`)}/>
       
       <br />
      <button onClick={()=>refreshDice()}className='button'>Roll</button>
          </div>
  );
}

export default App;
