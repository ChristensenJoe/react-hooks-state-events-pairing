import React, {useState} from "react";
import video from "../data/video.js";
import Description from "./Description";
import Comments from './Comments'
import Video from './Video'

function App() {
  const [isHidden, setIsHidden] = useState(false);

  function handleHideComments() {
      setIsHidden((isHidden) => !isHidden);
  }

  return (
    <div className="App">
      <Video url={video.embedUrl} />
      <Description 
      video={video} 
      isHidden={isHidden}
      onHideComments={handleHideComments}
      />
      <hr />
      <Comments 
      comments={video.comments} 
      isHidden={isHidden}
      />
    </div>
  );
}

//LikeCounter Increase (State)
//DislikeCounter Increase (State)


export default App;
