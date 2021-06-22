import React, { useState, useEffect } from "react";
import "./Feed.css";
import InputOptions from "./inputOption";
import { Avatar } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./post";
import {db } from './firebase';
import firebase from 'firebase';


function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      setPosts(  
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    })
  },[])

  const sendPost = event => {
    
    event.preventDefault();

    db.collection("posts").add({
      name: "Mukesh Thakkur",
      description: "this is a test",
      message: input,
      photoUrl:
        "https://media-exp1.licdn.com/dms/image/C4D35AQHjrThg9sn7zA/profile-framedphoto-shrink_200_200/0/1620458936692?e=1622372400&v=beta&t=UrHTm_Hyv7YfvQhOUDGHm4goYY8Zn5yko9wJol-gtkw",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("")
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">


          <form >
            <Avatar src="https://media-exp1.licdn.com/dms/image/C4D35AQHjrThg9sn7zA/profile-framedphoto-shrink_200_200/0/1620458936692?e=1622372400&v=beta&t=UrHTm_Hyv7YfvQhOUDGHm4goYY8Zn5yko9wJol-gtkw" />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post"
            />  

            <button onClick={sendPost} type="submit" className="btn btn-primary">send</button>
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

      {posts.map(
        ({ id, data: { name, description, message, photoUrl, timestamp } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            timestamp={timestamp}
          />
        )
      )}
    </div>
  );
}

export default Feed;
