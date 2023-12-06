import { Link } from "react-router-dom"
import Logout from "./Auth/Logout"
const Home = () => {
  return (
    <div>
      <h1>WElcome to home page</h1>
      <Link onClick={Logout} to="/">Logout</Link>
    </div>
  )
}

export default Home
