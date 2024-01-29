import { useContext } from "react";
import { Context } from "../context/AuthContext";

const Home = () => {
  const { logOut } = useContext(Context);

  return (
    <div>
      Home
      <button
        onClick={() => {
          if (logOut) {
            logOut();
          }
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default Home;
