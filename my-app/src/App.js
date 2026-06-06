import React from 'react';
import './App.css';
import Foo from './Foo'; // Importing the custom component from Slide 148

function App() {
  return (
    <div className="App" style={{ padding: "50px", textAlign: "center", fontFamily: "Segoe UI, sans-serif" }}>
      {/* Task requirement: Change the text in the code and observe the automatic change */}
      <h1 style={{ color: "#2196F3" }}>Hello World! - React Component Exercise</h1>
      <p style={{ fontSize: "14pt", color: "#666" }}>The text has been modified successfully.</p>
      
      {/* Rendering the components to see the dynamic count state */}
      <div>
        <Foo />
      </div>
    </div>
  );
}

export default App;