import React from 'react'
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widjets from "./Widjets";

function App() {
  return (
    <div className="app">
        <Sidebar/>
        <Feed/>
        <Widjets/>
    </div>
  );
}

export default App;
