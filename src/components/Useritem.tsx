import { IUser } from '../models/IUser'

interface PostItemProps {
  user: IUser
  remove: (user: IUser) => void
  update: (user: IUser) => void
}

export const UserItem: React.FC<PostItemProps> = ({ user, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation()
    remove(user)
  }

  const handleUpdate = () => {
    const name = prompt() || ''
    update({ ...user, name })
  }

  return (
    <div className="post">
      <div>
        <div className="post__title">
          <div>{user.id}.</div>
          <div>{user.name},</div>
          <div>{user.age}</div>
        </div>
        <div>email: {user.email}</div>
      </div>
      <div className="button_wrapper">
        <button onClick={handleUpdate}>update</button>
        <button onClick={handleRemove}>delete</button>
      </div>
    </div>
  )
}
