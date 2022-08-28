import auth from "../firebase";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };
  return !user ? (
    <Navigate to="/login" />
  ) : (
    <div>
      <h1>ホームページ</h1>
      <button onClick={handleLogout}>ログアウト</button>
      <section>
        <Link to="assessment">アセスメントページ</Link>
      </section>
    </div>
  );
};

export default Home;
