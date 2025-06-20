import React from 'react';
import logo from './Logo.png';

function Home() {
  return (
    <div>
      <h1>Welcome to My CRA Dockerized App!</h1>
      <img src={logo} alt="Logo" width={120} />
      <p>This is the Home page. Try navigating to About.</p>
    </div>
  );
}

export default Home;
