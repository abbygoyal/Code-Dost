import React from "react";
import Video from "../../../src/components/Video";

function VideoList({ videos }) {
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
        ></Video>
      ))}
    </div>
  );
}

export default VideoList;
