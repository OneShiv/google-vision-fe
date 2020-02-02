import React from 'react';
import './App.css';
import Upload from './Upload';
import LatestDetections from './LatestDetections';

function App() {
  return (
    <div className="App">
      <Upload />
      <LatestDetections />
    </div>
  );
}

export default App;
