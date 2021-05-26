import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Login from "./routes/Login/Login";
import Signup from "./routes/Signup/Signup";
import Forgotpassword from "./routes/Forgotpassword/Forgotpassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/Forgot-Password" exact component={Forgotpassword} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
