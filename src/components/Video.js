import React from "react";
import "../components/Video.css";

function Video({ title, id, channel, views, time }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="abhishek" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel} ✅ </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
