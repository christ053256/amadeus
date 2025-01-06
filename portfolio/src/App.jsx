import React from 'react';
import './App.css';

//Components
import Navigation from './components/Navigation';
import Home from './components/Home';


function App() {
  return (
    <>
      <div>
        <Navigation />
        <Home />
        {/* Other components can be added here */}
      </div>
    </>
  );
}

export default App;