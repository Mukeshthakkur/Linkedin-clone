import React, { useEffect } from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import "./App.css"
import Feed from "./Feed";
import Login from "./Login";
import {useDispatch, useSelector} from "react-redux"
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Widgets from './widgets';


function App() {
  const user =  useSelector(selectUser)
  const dispatch= useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth) {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        }))
      } else{
        dispatch(logout());
      }
    })
  }, [])



  return (
    <div class="app">
      <Header />
  
      <div className="app__body">
      {!user ? <Login /> : 
      (<div className="app__body" >
        <SideBar /> 
        <Feed />
        <Widgets />
         </div>)
      }
      </div>
    </div>
  );
}

export default App;
