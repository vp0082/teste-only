import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => (
  <div style={{ padding: '40px', background: 'navy', color: 'white', minHeight: '100vh' }}>
    <h1>REACT IS RUNNING</h1>
    <p>If you see this navy blue screen, React is working.</p>
  </div>
);

console.log('JS: Starting execution');

try {
  const container = document.getElementById('root');
  if (container) {
    console.log('JS: Container found, rendering...');
    const root = createRoot(container);
    root.render(<App />);
  } else {
    console.error('JS: Container #root not found');
  }
} catch (err) {
  console.error('JS: Render error:', err);
  document.body.innerHTML += '<div style="color:red">Render Error: ' + err.message + '</div>';
}
export {};






