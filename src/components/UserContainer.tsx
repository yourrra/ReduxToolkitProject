import { useState } from 'react'
import { UserItem } from './Useritem'
import { userAPI } from '../services/UserService'
import { IUser } from '../models/IUser'

export const UserContainer = () => {
  const [limit, setLimit] = useState(100)
  const { data: users, isLoading, error } = userAPI.useFetchAllUsersQuery(limit)
  const [deleteUser] = userAPI.useDeleteUserMutation()
  const [updateUser] = userAPI.useUpdateUserMutation()

  const handleRemove = (user: IUser) => {
    deleteUser(user)
  }
  const handleUpdate = (user: IUser) => {
    updateUser(user)
  }

  return (
    <div className="post__list">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {users &&
        users.map(user => (
          <UserItem
            remove={handleRemove}
            update={handleUpdate}
            key={user.id}
            user={user}
          />
        ))}
    </div>
  )
}
