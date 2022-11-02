import React from 'react';
import './App.css';

function App() {

  return (
    <div className='body'>
      
      <div className='calculadora'>

        <div className="display">
          <h2 className="historial_display">0</h2>
          <h2 className="numero_display">0</h2>
        </div>

        <div className='botones'>
          <button className="operadores naranja">C</button>
          <button className="operadores">%</button>
          <button className="operadores">DEL</button>
          <button className="operadores">/</button>
        
          <button className="numeros">7</button>
          <button className="numeros">8</button>
          <button className="numeros">9</button>
          <button className="operadores">*</button>
        
          <button className="numeros">4</button>
          <button className="numeros">5</button>
          <button className="numeros">6</button>
          <button className="operadores">-</button>
        
          <button className="numeros">1</button>
          <button className="numeros">2</button>
          <button className="numeros">3</button>
          <button className="operadores">+</button>
        
          <button className="operadores">.</button>
          <button className="numeros">0</button>
          <button className="operadores naranja col2">=</button>
        </div>

      </div>
      
    </div>
  );
}

export default App;
