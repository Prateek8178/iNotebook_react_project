import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // BUG FIX: Was navigate("/Login") - case mismatch with route definition
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg in-navbar">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          <i className="fa-solid fa-book-open me-2" style={{ fontSize: "1.1rem" }}></i>
          iNotebook
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left Side Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                <i className="fa-solid fa-house me-1" style={{ fontSize: "0.8rem" }}></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                to="/about"
              >
                <i className="fa-solid fa-circle-info me-1" style={{ fontSize: "0.8rem" }}></i>
                About
              </Link>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex align-items-center gap-2">
            {!localStorage.getItem("token") ? (
              <>
                <Link
                  className="btn btn-nav-login"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-nav-signup"
                  to="/signup"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <button onClick={handleLogout} className="btn btn-nav-logout">
                <i className="fa-solid fa-right-from-bracket me-2"></i>
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
