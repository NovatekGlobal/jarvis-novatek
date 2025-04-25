import React, { useState } from 'react';

function App() {
  const [respuesta, setRespuesta] = useState('');

  const manejarConsulta = () => {
    setRespuesta('Actualmente tienes 74 laptops Lenovo M710S en inventario.');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <img
        src="/novatek_logo_oficial.jpg"
        alt="Logo Novatek"
        style={{ width: '200px', marginBottom: '20px' }}
      />
      <h1>Hola, soy Jarvis de Novatek</h1>
      <p style={{ fontSize: '1.1rem', textAlign: 'center', maxWidth: '400px' }}>
        Tu asistente virtual para ayudarte con inventario, ventas y producción.
      </p>
      <button
        onClick={manejarConsulta}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#00aaff',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        ¿Cuántas Lenovo M710S tengo?
      </button>
      {respuesta && (
        <div style={{
          marginTop: '20px',
          backgroundColor: '#ffffff',
          color: '#000000',
          padding: '15px',
          borderRadius: '10px',
          maxWidth: '400px',
          textAlign: 'center',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)'
        }}>
          {respuesta}
        </div>
      )}
    </div>
  );
}

export default App;