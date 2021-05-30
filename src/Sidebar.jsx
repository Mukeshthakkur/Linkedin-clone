import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {

  const recentItem =(topic) =>(

    <div className="sidebar__recentItem">
      <p>
      <span className="sidebar__hash">#</span>
        {topic}</p>
    </div>
  )

  return (
    <div className="sidebar">


      <div className="sidebar__top">
        <img src="https://media-exp1.licdn.com/dms/image/C4D16AQEo6zDIaMhcbw/profile-displaybackgroundimage-shrink_200_800/0/1622288949710?e=1627516800&v=beta&t=s0K88B0hUaMH9e5-qiE1lkuIXMUGNJH2xlnHfLKx2OU" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Mukesh Thakkur</h2>
        <h4>mukeshthakkur.mt@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statNumber">30</p>
        </div>
        <div className="sidebar__stat">
        <p>who viewed you</p>
        <p className="sidebar__statNumber">03</p>
      </div>
      </div>


      <div className="sidebar__bottom">
          <p>Recent</p>

          {recentItem("reactjs")}
          {recentItem("redux")}
          {recentItem("programming")}
      </div>

    </div>
  );
}

export default Sidebar;
