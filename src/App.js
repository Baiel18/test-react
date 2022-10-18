import React, { useState } from 'react';
import './App.css';
const guestions = [
  {
    title:'React - это ... ?',
    variants: ['библиотека','фреймворк',"приложение"],
    correct: 0,
  },
   {
    title:'Component - это ... ?',
    variants: ['Библиотека','JSX',"Приложение"],
    correct: 1,
  }, 
  {
    title:'useState - это ... ?',
    variants: ['Приложение','Hook',"Фреймворк"],
    correct: 1,
  }
]
function Game({guestion,perseg,step}) {
  const perse = Math.round((step/guestions.length)*100)
  
  return (
    <div className='gamecontent'>
      <br/>
      <div style={{width:`${perse+5}%`}} className="prossent"></div>
      <h1>{guestion.title}</h1>
      <ul>
        {
          guestion.variants.map((el,i)=>{
            return <li onClick={()=>perseg(i)} key={el.id}>{el}</li>
          })
        }
      </ul>
    </div>

  )
}
function Result({carrect}) {
  return (
    <div className='result'>
      <h1>Mолодец</h1>
      <img src='https://orig04.deviantart.net/17c8/f/2013/179/0/2/two_flowers_by_luisbc-d6b2bcs.gif'/>
      <h3>из {guestions.length} правильный {carrect}</h3>
      <a href='/'>
      <h1 className='snovo'>повторит</h1>
      </a>
    </div>
  )
}

function App() {
  const [step,setStep] = useState(0)
  const [carrect,setCarrect] = useState(0)
  const guestion = guestions[step]

  const perseg= (i)=>{
      setStep(step+1)
      if(i === guestion.correct){
        setCarrect(carrect +1)
      }
  }
  return (
   
    <div className="App">
      {
        step !== guestions.length ? (
          <Game step={step} perseg={perseg} guestion={guestion}/>
          ):(
            
            <Result carrect={carrect}/>
            )
          }
          
    </div>
  );
}

export default App;
