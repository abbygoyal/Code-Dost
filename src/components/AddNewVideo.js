import "./AddNewVideo.css";
import React, { useState } from "react";

const intialState = {
  time: "1 month ago",
  channel: "Abhishek Goyal",
  title: "",
  views: "",
};

function AddVideo({ addVideos }) {
  const [video, setVideos] = useState(intialState);

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideos(intialState);
  }
  function handleChange(e) {
    setVideos({ ...video, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={video.title}
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
          value={video.views}
        />
        <button className="button" onClick={handleSubmit}>
          Add Video
        </button>
      </form>
    </div>
  );
}

export default AddVideo;
