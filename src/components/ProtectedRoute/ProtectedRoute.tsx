import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/AuthContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProtectedRoute = ({ element }: any) => {
  const values = useContext(Context);

  if (!values?.user) {
    if (!values?.user) {
      return <Navigate to="/login" replace />;
    }
  }

  return element;
};

export default ProtectedRoute;
