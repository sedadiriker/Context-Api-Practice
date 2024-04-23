import { NavLink } from "react-router-dom";
import "./Nav.css"
const Nav = () => {
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default Nav;
