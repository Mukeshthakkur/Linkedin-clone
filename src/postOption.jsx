import React from 'react'; 
import "./postOption.css"; 

function postOption({Like, Comment, Share, Send }) {
    return (
        <div>
        {like && <Like className="postOption__icon"  /> }
        {comment && <Comment className="postOption__icon" /> }
        {share && <Share className="postOption__icon" /> }
        {send && <Send className="postOption__icon" /> }
        </div>
    )
}

export default postOption
