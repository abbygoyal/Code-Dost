import "./AddNewVideo.css";
import React, { useEffect, useState } from "react";

const intialState = {
  time: "1 month ago",
  channel: "Abhishek Goyal",
  title: "",
  views: "",
};

function AddVideo({ addVideos, updateVideo, editableVideo }) {
  const [video, setVideos] = useState(intialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      updateVideo(video);
    } else {
      addVideos(video);
    }
    setVideos(intialState);
  }
  function handleChange(e) {
    setVideos({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editableVideo) {
      setVideos(editableVideo);
    }
  }, [editableVideo]);

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
          {editableVideo ? "Edit" : "Add"} Video
        </button>
      </form>
    </div>
  );
}

export default AddVideo;
