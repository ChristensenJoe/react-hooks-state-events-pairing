import Comment from './Comment'

function Comments({ comments }){
  return (
    <div>
     <h1>{`${comments.length} Comments`}</h1>
      {comments.map((comment) => {
        return (
          <Comment key={comment.id} user={comment.user} comment={comment.comment} />
       )
      })}
    </div>
  )
}

export default Comments;