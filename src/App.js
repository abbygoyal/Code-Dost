import "./App.css";
import { useReducer, useState } from "react";
import AddNewVideo from "./components/AddNewVideo";
import videoDB from "./data/data";
import VideoList from "./components/VideoList";

function App() {
  const [editableVideo, setEditableVideo] = useState();

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newUpdatedVideo = [...videos];
        newUpdatedVideo.splice(index, 1, action.payload);
        setEditableVideo();
        return newUpdatedVideo;
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, videoDB);
  // const [videos, setVideos] = useState(videoDB);

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <div className="App">
      <AddNewVideo
        dispatch={dispatch}
        editableVideo={editableVideo}
      ></AddNewVideo>
      <VideoList
        dispatch={dispatch}
        editVideo={editVideo}
        videos={videos}
      ></VideoList>
    </div>
  );
}

export default App;
