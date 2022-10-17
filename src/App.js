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
    variants: ['библиотека','JSX',"приложение"],
    correct: 1,
  }, 
  {
    title:'props - это ... ?',
    variants: ['приложение','hook',"фреймворк"],
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
      <h1>молодец</h1>
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
