import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">MEIX</div>
      <ul className="nav-items">
        <NavLink to="/showcase">Showcase</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/me">Me!</NavLink>
        <li className="nav-icon">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/sf-black-filled/64/FFFFFF/call-me.png"
            alt="call-me"
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
