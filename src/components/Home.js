import { useNavigate } from "react-router-dom";
import Logout from "./Auth/Logout";
const Home = () => {
  const navigate = useNavigate();
  const logout = () => {
    Logout();
    navigate("/login");
  };
  return (
    <div>
      <h1>WElcome to home page</h1>
      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
