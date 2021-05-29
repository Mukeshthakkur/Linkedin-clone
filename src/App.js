import React from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import "./App.css"

function App() {
  return (
  
    <div class="app">
      <Header />


      <div className="app__body">
        <SideBar />
      </div>


    </div>
  );
}

export default App;
