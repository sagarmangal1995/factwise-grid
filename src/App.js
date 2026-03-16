import React from "react";
import EmployeeGrid from "./components/EmployeeGrid";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Employee Dashboard</h1>
      </header>

      <div className="container">
        <EmployeeGrid />
      </div>
    </div>
  );
}

export default App;