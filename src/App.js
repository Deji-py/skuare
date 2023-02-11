import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Signup from "./Main/Authentication/Signup";
import Splash from "./Main/Authentication/Splash";
import Login from "./Main/Authentication/Login";
import Dashboard from "./Main/Dashboard";
import Home from "./Pages/Home";
import Messages from "./Pages/Messages";
import Notification from "./Pages/Notification";
import Profile from "./Pages/Profile";
import Error from "./Main/Error";
import theme from "./Context/themeContext";
import Post from "./Pages/Post";
import { useContext, useState } from "react";
import CurrentUser from "./Context/firebaseContext";
import auth from "./firebse_config";
import { onAuthStateChanged } from "firebase/auth";
import { AuthProvider } from "./Context/firebaseContext";

function App() {
  return (
    <div className="App ">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="home" element={<Home />} />
              <Route path="messages" element={<Messages />} />
              <Route path="notifications" element={<Notification />} />
              <Route path="profile" element={<Profile />} />
              <Route path="post" element={<Post />} />
              <Route path="*" element={<Error />} />
            </Route>

            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
