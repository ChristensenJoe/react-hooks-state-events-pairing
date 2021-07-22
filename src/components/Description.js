import Header from "./Header";
import LikeButtons from "./LikeButtons";
import HideComments from "./HideComments";

function Description({video}) {
    return (
        <>
            <Header 
            title={video.title}
            views={video.views}
            date={video.createdAt}
          />
          <LikeButtons 
          likes={video.upvotes}
          dislikes={video.downvotes}
          />
          <br />
          <HideComments />
        </>
    );
}

export default Description;