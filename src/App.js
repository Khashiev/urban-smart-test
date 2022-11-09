import "./index.css";
import "./App.css";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const App = () => {
  const state = useSelector((state) => state.auth);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="profile" element={<ProfilePage login={state.login} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
