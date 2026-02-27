import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => (
  <div style={{ 
    height: '100vh', 
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
    background: '#0f172a', 
    color: 'white',
    fontFamily: 'sans-serif'
  }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>CONEXÃO ESTABELECIDA</h1>
    <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>O ambiente de desenvolvimento está pronto.</p>
    <div style={{ 
      marginTop: '2rem', 
      padding: '1rem 2rem', 
      border: '2px solid #38bdf8', 
      borderRadius: '0.5rem',
      color: '#38bdf8',
      fontWeight: 'bold'
    }}>
      REACT ONLINE
    </div>
  </div>
);

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
