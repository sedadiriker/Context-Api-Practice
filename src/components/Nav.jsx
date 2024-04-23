import { NavLink } from "react-router-dom";
import "./Nav.css"
import { useLoginContext } from "../context/LoginContext";
const Nav = () => {
  const {signed,setSigned} = useLoginContext()


  return (
    <div className="nav">
      <NavLink to="home">Home</NavLink>
      <NavLink to="products">Products</NavLink>
      {
        signed ? (
          <NavLink  onClick={() => setSigned(false)} to="/">Logout</NavLink>
        ):(
          <NavLink to="/">Login</NavLink>
        )
      }
      
    </div>
  );
};

export default Nav;
