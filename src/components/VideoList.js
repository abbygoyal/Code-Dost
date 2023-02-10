import React from "react";
import Video from "./Video";

function VideoList({ videos, deleteVideo, editVideo }) {
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
          deleteVideo={deleteVideo}
          editVideo={editVideo}
        ></Video>
      ))}
    </div>
  );
}

export default VideoList;
