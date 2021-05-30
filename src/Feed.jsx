import React from "react";
import "./Feed.css";
import HeaderOption from "./HeaderOption";
import InputOptions from "./inputOption";
import ImageIcon from "@material-ui/icons/Image" 
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';



function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">


        <div className="feed__input">
          <form>
          <HeaderOption className="avatar" avatar="https://media-exp1.licdn.com/dms/image/C4D35AQHjrThg9sn7zA/profile-framedphoto-shrink_200_200/0/1620458936692?e=1622372400&v=beta&t=UrHTm_Hyv7YfvQhOUDGHm4goYY8Zn5yko9wJol-gtkw" />
          <input placeholder="Start a post" />
          </form>  

          <div className="inputOptions">
              <InputOptions Icon={ImageIcon} title="Photo" color="lightblue" />
              <InputOptions Icon={YouTubeIcon} title="Video" color="lightgreen" />
              <InputOptions Icon={EventNoteIcon} title="Event" color="orange" />
              <InputOptions Icon={CalendarViewDayIcon} title="Writearticle" color="pink" />
          </div>  
        </div>



      </div>
    </div>
  );
}

export default Feed;
