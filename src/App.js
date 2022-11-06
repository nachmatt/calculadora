import React, { useState } from 'react';
import './App.css';


// toexponential, solo cuando result es mayor a 10
// tercer variable para reoperar luego de hacer una cuenta
function App() {
  const [result, setResult] = useState("")
  const [memo, setMemo] = useState('')
  const [aux, setAux] = useState(true)

  const handleClick = (e) => {
    if(result.length > 10 ){
      return;
    }
    if(memo !== '' && aux) {
      setResult(e.target.innerText)
      setAux(false);
    } else {
      setResult(result.concat(e.target.innerText))
    }
    
  }

  const clear = () => {
    setResult("")
    setMemo("")
  }

  const backspace = () => {
    setResult(result.slice(0, -1))
  }
  

  const calculate = () => {
    try{
      if(memo === ''){
        setMemo(result)
        setResult(eval(result).toExponential(3).toString())
        setAux(true)
      } else {
        setMemo(result)
        setResult(eval(result).toExponential(3).toString())
        setAux(true)
      }
      
    }
    catch(err){
      setResult('error')
    }
  }

  return (
    <div className='body'>
      
      <div className='calculadora'>

        <div className="display">
          <h2 className="historial_display">{memo}</h2>
          <h2 className="numero_display">{result}</h2>
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
