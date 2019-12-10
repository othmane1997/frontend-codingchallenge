import React from "react";
import "./App.css";
import ListingRepositories from "./repository/ListingRepositories";

function App() {
  return (
    <div className="App">
      <h1>Most starred Repositories On GiHub Last 30 Days</h1>
      <header className="App-header">
        <ListingRepositories />
      </header>
    </div>
  );
}

export default App;
