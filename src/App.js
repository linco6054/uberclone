import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Login from "./routes/Login/Login";
import Signup from "./routes/Signup/Signup";
import PrivateRoute from "./components/PrivateRoute";
import BackendHome from "./Backend/Home/BackendHome";
import Forgotpassword from "./routes/Forgotpassword/Forgotpassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdateEmail from "./Backend/Profile/UpdateEmail";
import Profile from "./Backend/Profile/Profile";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Forgot-Password" exact component={Forgotpassword} />

          <PrivateRoute path="/Update-Email" exact component={UpdateEmail} />
          <PrivateRoute path="/Update-Profile" exact component={Profile} />
          <PrivateRoute path="/Home" exact component={BackendHome} />
          {/* backend */}
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
