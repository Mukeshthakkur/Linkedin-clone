import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

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
      <HeaderOption Icon={HomeIcon} title="Home" />
      <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
      <HeaderOption Icon={WorkIcon} title="Job" />
      <HeaderOption Icon={MessageIcon} title="Messaging" />
      <HeaderOption Icon={NotificationsIcon} title="Notification" />
      <HeaderOption onClick={logoutOfApp} avatar={true} title="Me" />
    </div>
  );
}

export default Header;
