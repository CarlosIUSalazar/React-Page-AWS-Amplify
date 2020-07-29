import React from 'react';
import Clock from 'react-live-clock';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello my name is Carlos</h1>
      <h2>Welcome to my React Page on Amplify</h2>
      <h3>The current time is <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /></h3> 
    </div>
  );
}

export default App;
