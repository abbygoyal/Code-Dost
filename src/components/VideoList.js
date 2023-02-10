import React from "react";
import Video from "./Video";

function VideoList({ videos, dispatch, editVideo }) {
  return (
    <div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          id={video.id}
          editVideo={editVideo}
          dispatch={dispatch}
        ></Video>
      ))}
    </div>
  );
}

export default VideoList;
