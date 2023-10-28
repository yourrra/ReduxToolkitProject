import { CreatePosts } from './components/CreatePost'
import { CreateUser } from './components/CreateUser'
import { PostContainer } from './components/PostContainer'
import { UserContainer } from './components/UserContainer'

function App() {
  return (
    <div className="wrapper">
      <div className="wrapper__create">
        <CreatePosts />
        <CreateUser />
      </div>
      <div className="app">
        <PostContainer />
        <UserContainer />
      </div>
    </div>
  )
}

export default App
