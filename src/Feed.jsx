import React from "react";
import "./Feed.css";
import InputOptions from "./inputOption";
import { Avatar } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <form>
            <Avatar src="https://media-exp1.licdn.com/dms/image/C4D35AQHjrThg9sn7zA/profile-framedphoto-shrink_200_200/0/1620458936692?e=1622372400&v=beta&t=UrHTm_Hyv7YfvQhOUDGHm4goYY8Zn5yko9wJol-gtkw" />
            <input placeholder="Start a post" />
          </form>

          <div className="feed__options">
            <InputOptions
              clasName="feed__option"
              Icon={ImageIcon}
              title="Photo"
              color="lightblue"
            />
            <InputOptions
              clasName="feed__option"
              Icon={YouTubeIcon}
              title="Video"
              color="lightgreen"
            />
            <InputOptions
              clasName="feed__option"
              Icon={EventNoteIcon}
              title="Event"
              color="orange"
            />
            <InputOptions
              clasName="feed__option"
              Icon={CalendarViewDayIcon}
              title="Writearticle"
              color="pink"
            />
          </div>
        </div>
      </div>

      <Post
        name="Mukesh"
        description="this is description"
        message="Wow its working..."
        photoUrl="https://media-exp1.licdn.com/dms/image/C4D35AQHjrThg9sn7zA/profile-framedphoto-shrink_200_200/0/1620458936692?e=1622372400&v=beta&t=UrHTm_Hyv7YfvQhOUDGHm4goYY8Zn5yko9wJol-gtkw"
      />
    </div>
  );
}

export default Feed;
