import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const {user} = useContext(AuthContext);
  return (
    <h1 className="text-3xl font-bold underline">
      Hello ,{user.name}!
    </h1>
  );
}

export default App;
