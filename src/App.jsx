import React, { useState } from 'react';

function App() {
  const [respuesta, setRespuesta] = useState('');

  const manejarConsulta = () => {
    setRespuesta('Actualmente tienes 74 laptops Lenovo M710S en inventario.');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Jarvis para Novatek</h1>
      <p>Tu asistente virtual para gestión operativa</p>
      <button onClick={manejarConsulta} style={{ margin: '20px', padding: '10px 20px' }}>¿Cuántas Lenovo M710S tengo?</button>
      {respuesta && <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>{respuesta}</div>}
    </div>
  );
}

export default App;
