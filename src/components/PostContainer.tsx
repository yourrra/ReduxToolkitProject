import { useState } from 'react'
import { postAPI } from '../services/PostService'
import { PostItems } from './PostItem'
import { IPost } from '../models/IPost'

export const PostContainer = () => {
  const [limit, setLimit] = useState(100)
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(limit)
  const [deletePost] = postAPI.useDeletePostMutation()
  const [updatePost] = postAPI.useUpdatePostMutation()

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }
  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div className="post__list">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {posts &&
        posts.map(post => (
          <PostItems
            remove={handleRemove}
            update={handleUpdate}
            key={post.id}
            post={post}
          />
        ))}
    </div>
  )
}
