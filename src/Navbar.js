import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand-name">
        Blog Template
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Article</Link>
      </div>
    </nav>
  );
};

export default Navbar;
