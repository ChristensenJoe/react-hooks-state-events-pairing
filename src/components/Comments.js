import Comment from './Comment'

function Comments({ comments, isHidden }){

  const allComments = (
    (
      <div>
     <h1>{`${comments.length} Comments`}</h1>
      {comments.map((comment) => {
        return (
          <Comment key={comment.id} user={comment.user} comment={comment.comment} />
       )
      })}
    </div>
    )
  );

  return (
    <>
    {isHidden ? null : allComments}
    </>
  )
}

export default Comments;