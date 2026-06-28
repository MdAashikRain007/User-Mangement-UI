import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="container nav-inner">
      <Link to="/" className="brand">
        User Management
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/add" className="nav-link button-link">
          Add User
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
