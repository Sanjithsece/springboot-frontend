import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("roles");
    navigate("/"); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">EMS</Link>
        <ul className="navbar-nav">
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/getemployees">Employees</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link text-light" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
