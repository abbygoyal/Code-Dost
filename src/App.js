import "./App.css";
import { useState } from "react";
import AddNewVideo from "./components/AddNewVideo";
import videoDB from "./data/data";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videoDB);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  return (
    <div className="App">
      <AddNewVideo addVideos={addVideos}></AddNewVideo>
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
