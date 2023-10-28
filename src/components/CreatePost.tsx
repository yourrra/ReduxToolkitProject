import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormData {
  title: string
  body: string
}

export const CreatePosts = () => {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const [createPost, { isLoading, isError, isSuccess }] =
    postAPI.useCreatePostMutation()

  const onSubmit: SubmitHandler<FormData> = async data => {
    if (isLoading) return

    try {
      await createPost({ title: data.title, body: data.body } as IPost)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="wrapper__input">
      <form className="form_wrapper" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title:
          <input
            type="text"
            placeholder="Title"
            {...register('title', { required: true })}
          />
        </label>
        <label>
          Body:
          <input
            type="text"
            placeholder="Body"
            {...register('body', { required: true })}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Add Post'}
        </button>
        {isError && <p>Error: {isError.message}</p>}
        {isSuccess && (
          <p>
            Post created successfully.{' '}
            <button onClick={() => reset()}>Create another</button>
          </p>
        )}
      </form>
    </div>
  )
}
