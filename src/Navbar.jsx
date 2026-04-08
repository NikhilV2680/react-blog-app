import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", backgroundColor: "#f2f2f2" }}>
      <Link to="/" style={{ marginRight: "15px" }}>
        Blog Posts
      </Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
