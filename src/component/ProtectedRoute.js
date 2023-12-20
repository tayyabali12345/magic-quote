import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
  const loggedInUser = useSelector((state) => state.users.currentUser);

  return loggedInUser ? <Component /> : <Navigate to="/" />;
};
export default ProtectedRoute;
