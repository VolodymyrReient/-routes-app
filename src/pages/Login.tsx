import { useContext } from "react";
import { Context } from "../context/AuthContext";

const Login = () => {
  const { logIn } = useContext(Context);

  return (
    <div>
      <button
        onClick={() => {
          if (logIn) {
            logIn();
          }
        }}
      >
        LogIn
      </button>
    </div>
  );
};

export default Login;
