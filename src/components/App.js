import video from "../data/video.js";
import Description from "./Description";
import Comments from './Comments'
import Video from './Video'

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video url={video.embedUrl} />
      <Description video={video} />
      <hr />
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;
