import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  }
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* LEFT SIDE */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

          {/* RIGHT SIDE BUTTONS */}
          <div className="d-flex">
            {!localStorage.getItem("token") ? (
              <>
                <Link
                  className={`btn btn-outline-light mx-1 ${location.pathname === "/login" ? "active" : ""}`}
                  to="/login"
                >
                  Login
                </Link>

                <Link
                  className={`btn btn-primary mx-1 ${location.pathname === "/signup" ? "active" : ""}`}
                  to="/signup"
                >
                  Signup
                </Link>
              </>
            ) : (
              <button onClick={handleLogout} className="btn btn-danger">
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
