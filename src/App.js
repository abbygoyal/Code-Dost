import "./App.css";
import { useState } from "react";
import AddNewVideo from "./components/AddNewVideo";
import Video from "./components/Video";
import videoDB from "./data/data";

function App() {
  const [videos, setVideos] = useState(videoDB);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  return (
    <div className="App">
      <AddNewVideo addVideos={addVideos}></AddNewVideo>
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

export default App;
