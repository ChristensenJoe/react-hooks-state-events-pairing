function Video({ url }){
  return (
    <iframe
    width="919"
    height="525"
    src={url}
    frameborder="0"
    allowfullscreen
    title="Thinking in React"
  />
  )
}

export default Video;