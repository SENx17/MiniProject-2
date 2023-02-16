import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileContainer from "./pages/ProfileContainer";
import HomeContainer from "./pages/HomeContainer";
import LoginContainer from "./pages/LoginContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/home" element={<HomeContainer />} />
        <Route path="/profile" element={<ProfileContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
