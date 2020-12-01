import './styles/navbar.css';
import Logo from '../imgs/logop.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/home">
        <img src={Logo} alt="nepoets" className="logo"/>
      </Link>
      <ul className="nav-links">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/adopt">
          <li>Adopt</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
