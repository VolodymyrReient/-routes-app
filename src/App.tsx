import AuthContext from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AuthContext>
      <AppRoutes />
    </AuthContext>
  );
}

export default App;
