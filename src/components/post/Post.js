const Post = ({post}) => {
  return (
      <div>
          <div>{post.id}: {post.body}</div>
      </div>
  )
}

export {Post};