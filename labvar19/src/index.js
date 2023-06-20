import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MarkCounter(props){
  const [latestNum, change] = React.useState(0);
  const changedInput = (event) =>{change(Number(event.target.value))};
  const [[sum,counter],recalculate] = React.useState([0,0]);
  const addNum = ()=>{
    if(!isNaN(parseFloat(latestNum))){
      recalculate([sum+latestNum,counter+1]);
  }
  }
  
    return(
      <p>
        Введите число: <input type='number' onChange={changedInput}></input>
        <button onClick={addNum}>Отправить</button>
        <br/>
        Средняя оценка: {counter === 0? 0:   sum/counter}
      </p>
    )
}

root.render(<MarkCounter/>);
