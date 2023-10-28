import { IPost } from '../models/IPost'

interface PostItemProps {
  post: IPost
  remove: (post: IPost) => void
  update: (post: IPost) => void
}

export const PostItems: React.FC<PostItemProps> = ({
  post,
  remove,
  update,
}) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation()
    remove(post)
  }

  const handleUpdate = () => {
    const title = prompt() || ''
    update({ ...post, title })
  }

  return (
    <div className="post">
      <div>
        <div className="post__title">
          <div>{post.id}.</div>
          <div>{post.title}</div>
        </div>
        <div>{post.body}</div>
      </div>
      <div className="button_wrapper">
        <button onClick={handleUpdate}>update</button>
        <button onClick={handleRemove}>delete</button>
      </div>
    </div>
  )
}
