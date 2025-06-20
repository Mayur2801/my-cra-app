import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Hello from Dockerized CRA 🎉</h1>
      <p>This React app is served using Nginx in a multi-stage Docker container.</p>
    </div>
  );
}

export default App;
