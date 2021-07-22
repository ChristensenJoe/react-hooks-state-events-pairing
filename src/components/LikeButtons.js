
function LikeButtons({likes, dislikes}) {
    return (
        <div>
            <button>{`${likes} 👍`}</button>
            <button>{`${dislikes} 👎`}</button>
        </div>
    );
}

export default LikeButtons;