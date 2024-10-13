import React from 'react';
import Timer from './components/Countdown/Timer';
import Optin from './components/Optin/Optin';
import Preloader from './components/Preloader/Preloader';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

export default App;