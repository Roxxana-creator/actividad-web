import React, { useState } from 'react';
import './App.css';
import Login from './componentes/Login';
import Registro from './componentes/Registro';

function App() {
  const [pantalla, setPantalla] = useState('login');

  return (
    <div className="App">
      {/* Se eliminó el nav para que los botones vivan dentro de cada tarjeta */}
      {pantalla === 'login' 
        ? <Login setPantalla={setPantalla} /> 
        : <Registro setPantalla={setPantalla} />
      }
    </div>
  );
}

export default App;