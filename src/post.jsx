import React from "react";
import { Avatar } from "@material-ui/core";
import "./post.css";
import InputOption from "./inputOption";
import Like from "@material-ui/icons/ThumbUpOutlined";
import Comment from "@material-ui/icons/CommentRounded";
import Share from "@material-ui/icons/ShareSharp";
import Send from "@material-ui/icons/SendTwoTone";

function post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl} />
        <div className="post__info">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption
          className="post__button"
          Icon={Like}
          title="Like"
          color="grey"
        />
        <InputOption
          className="post__button"
          Icon={Comment}
          title="Comment"
          color="grey"
        />
        <InputOption
          className="post__button"
          Icon={Share}
          title="Share"
          color="grey"
        />
        <InputOption
          className="post__button"
          Icon={Send}
          title="Send"
          color="grey"
        />
      </div>
    </div>
  );
}

export default post;
