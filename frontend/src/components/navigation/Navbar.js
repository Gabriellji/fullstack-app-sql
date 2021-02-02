import { Link } from "react-router-dom";

const Navbar = () => (
  <ul>
    <li>
      <Link to="/">Register</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="/profile">Profile</Link>
    </li>
  </ul>
);

export default Navbar;
