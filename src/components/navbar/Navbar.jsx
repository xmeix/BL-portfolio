import "./Navbar.css";
import logo from "./../../../public/MEIX.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">MEIX</div>
      <ul className="nav-items">
        <li>Showcase</li>
        <li>work</li>
        <li>Me!</li>
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
