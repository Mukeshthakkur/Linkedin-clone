import React from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import "./App.css"
import Feed from "./Feed";
import Login from "./Login";

function App() {
  return (
    <div class="app">
      <Header />
      <div className="app__body">
        <Login /> 
      </div>
      
    </div>
  );
}

export default App;
