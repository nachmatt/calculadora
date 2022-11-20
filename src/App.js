import React, { useState } from 'react';
import './App.css';

// toexponential, solo cuando actualValue es mayor a 10 
// tercer variable para reoperar luego de hacer una cuenta
// memo mantiene una sola operacion (concat de actuaValue)
function App() {
  const [actualValue, setActualValue] = useState('')
  const [result, setResult] = useState('')
  const [memo, setMemo] = useState('')
  const [memo2, setMemo2] = useState('')
  const [operator, setOperator] = useState('')

  const handleClick = (e) => {
    setActualValue(actualValue + e.target.innerText)
    if(!Number(e.target.innerText)) {
      setOperator(e.target.innerText)
      
    }
  }

  const clear = () => {
    setActualValue('')
    setResult('')
    setMemo('')
    setMemo2('')
  }

  const backspace = () => {
    setActualValue(actualValue.slice(0, -1))
  }

  const calculate = () => {
    if(result === ''){
      setResult(eval(actualValue))
      setMemo(actualValue)
      setMemo2(result)
      setActualValue('')
    } else {
      let concatDelResult = operator.concat(result)
      let aux = actualValue.toString().concat(concatDelResult)
      setActualValue('')
      setResult(eval(aux))
      setMemo(actualValue)
      setMemo2(result)
    }
  }
  

  return (
    <div className='body'>
      
      <div className='calculadora'>

        <div className="display">
          <h2 className="historial_display">{!actualValue ? actualValue : memo + operator + memo2}</h2>
          <h2 className="numero_display">{result ? result : actualValue}</h2>
        </div>  

        <div className='botones'>
          <button onClick={clear} className="operadores naranja">C</button>
          <button onClick={handleClick} className="operadores">%</button>
          <button onClick={backspace} className="operadores">DEL</button>
          <button onClick={handleClick} className="operadores">/</button>
        
          <button onClick={handleClick}>7</button>
          <button onClick={handleClick}>8</button>
          <button onClick={handleClick}>9</button>
          <button className="operadores" onClick={handleClick}>*</button>
        
          <button onClick={handleClick}>4</button>
          <button onClick={handleClick}>5</button>
          <button onClick={handleClick}>6</button>
          <button className="operadores" onClick={handleClick}>-</button>
        
          <button onClick={handleClick}>1</button>
          <button onClick={handleClick}>2</button>
          <button onClick={handleClick}>3</button>
          <button className="operadores" onClick={handleClick}>+</button>
        
          <button onClick={handleClick}>.</button>
          <button onClick={handleClick}>0</button>
          <button className="operadores col2" onClick={calculate}>=</button>
        </div>

      </div>
      
    </div>
  );
}

export default App;
