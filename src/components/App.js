import video from "../data/video.js";
import Description from "./Description";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <Description video={video} />
      <hr />
      {
        //Comments
          //Comment
          //Comment
      }
    </div>
  );
}

export default App;
