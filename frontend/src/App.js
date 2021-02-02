import AuthContextProvider from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Registration from "./components/forms/registration/Registration";
import PrivateRoute from "./components/protected-routes/PrivateRoute";
import Login from "./components/forms/login/Login";
import Profile from "./components/protected-components/Profile";

const App = () => (
  <section className="App">
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Registration} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </AuthContextProvider>
  </section>
);

export default App;
