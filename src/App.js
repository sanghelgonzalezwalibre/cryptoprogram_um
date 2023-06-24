import React from "react"
import { Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div style={{ width: '100%',
    height: '100vh'  }}>
      <Routes>
        <Route exact path='*' element={<div className="App"></div>} />
      </Routes>
    </div>
  );
}

export default App;
