
function HideComments({isHidden, onHideComments}) {
    return (
        <button onClick={onHideComments}>{isHidden ? "Show Comments" : "Hide Comments"}</button>
    );
}

export default HideComments