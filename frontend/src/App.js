import AuthContextProvider from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navigation/Navbar";
import Register from "./components/forms/register/Register";
import PrivateRoute from "./components/protected-routes/PrivateRoute";
import Login from "./components/forms/login/Login";
import Profile from "./components/protected-components/Profile";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
