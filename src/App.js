import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StudentListView from "./StudentListView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Student List</h2>
        <StudentListView></StudentListView>
      </header>
    </div>
  );
}

export default App;
