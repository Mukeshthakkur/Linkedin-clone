import React from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import "./App.css"
import Feed from "./Feed";
import Login from "./Login";
import {useSelector} from "react-redux"
import { selectUser } from "./features/userSlice";

function App() {
  const user =  useSelector(selectUser)
  return (
    <div class="app">
      <Header />
  
      <div  className="app__body">
      {!user ? <Login /> : 
      (<div>
        <SideBar /> 
        <Feed />
         </div>)
      }
      </div>
    </div>
  );
}

export default App;
