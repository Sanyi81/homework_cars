const Comment = ({comment}) => {
  return (
      <div>
          <div>{comment.id}: {comment.name}</div>
          <p>{comment.body}</p>
      </div>
  )
}

export {Comment}