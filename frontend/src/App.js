import AuthContextProvider from "./context/AuthContext";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Registration from "./components/forms/registration/Registration";
import PrivateRoute from "./components/protected-routes/PrivateRoute";
import Login from "./components/forms/login/Login";
import Profile from "./components/protected-components/Profile";

const App = () => (
  <section className="App">
    <AuthContextProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </AuthContextProvider>
  </section>
);

export default App;
