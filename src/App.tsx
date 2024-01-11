import { Route, Routes } from "react-router-dom";
import LoginScreen from "./components/Login/LoginScreen";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
}

export default App;
