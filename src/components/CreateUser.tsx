import { SubmitHandler, useForm } from 'react-hook-form'
import { userAPI } from '../services/UserService'
import { IUser } from '../models/IUser'

interface FormData {
  name: string
  age: number
  email: string
}

export const CreateUser = () => {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const [createUser, { isLoading, isError, isSuccess }] =
    userAPI.useCreateUserMutation()

  const onSubmit: SubmitHandler<FormData> = async data => {
    if (isLoading) return

    try {
      await createUser({
        name: data.name,
        age: data.age,
        email: data.email,
      } as IUser)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="wrapper__input">
      <form className="form_wrapper" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            {...register('name', { required: true })}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            placeholder="Enter your age"
            {...register('age', { required: true })}
          />
        </label>
        <label>
          e-mail:
          <input
            type="email"
            placeholder="Enter your e-mail"
            inputMode="email"
            {...register('email', { required: true })}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating..' : 'Add User'}
        </button>
        {isError && <p>Error: {isError.message}</p>}
        {isSuccess && (
          <p>
            User created successfully.{' '}
            <button onClick={() => reset()}>Create another</button>
          </p>
        )}
      </form>
    </div>
  )
}
