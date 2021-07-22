import React, {useState} from "react";

function LikeButtons({likes, dislikes}) {
    const [likeCount, setLikeCount] = useState(likes);
    const [dislikeCount, setDislikeCount] = useState(dislikes);

    function onLikeClick() {
        setLikeCount((likeCount) => likeCount+1);
    }
    function onDislikeClick() {
        setDislikeCount((dislikeCount) => dislikeCount+1);
    }

    return (
        <div>
            <button onClick={onLikeClick}>{`${likeCount} 👍`}</button>
            <button onClick={onDislikeClick}>{`${dislikeCount} 👎`}</button>
        </div>
    );
}

export default LikeButtons;