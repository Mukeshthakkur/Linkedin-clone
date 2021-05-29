import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import HeaderOption from "./HreaderOption";
import HomeIcon from "@material-ui/icons/Home"; 
import NotificationsIcon from '@material-ui/icons/Notifications';
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';


function Header() {
  return (
    <div className="header">

      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right"></div>
      <HeaderOption Icon={HomeIcon} title="Home"  />
      <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
      <HeaderOption Icon={WorkIcon} title="Job" />
      <HeaderOption Icon={MessageIcon} title="Messaging" />
      <HeaderOption Icon={NotificationsIcon} title="Notification" />
      <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4D35AQHjrThg9sn7zA/profile-framedphoto-shrink_200_200/0/1620458936692?e=1622372400&v=beta&t=UrHTm_Hytitle=v7YfvQhOUDGHm4goYY8Zn5yko9wJol-gtkw" title="Me" />
    </div>
  );
}

export default Header;
