import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    cpassword: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;

    if (password !== cpassword) {
      props.showAlert("Passwords do not match. Please try again.", "danger");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        props.showAlert("Account created successfully! Welcome 🎉", "success");
        navigate("/");
      } else {
        props.showAlert("Registration failed. Please try again.", "danger");
      }
    } catch (err) {
      props.showAlert("Server error. Please try again later.", "danger");
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Logo */}
        <div className="text-center mb-4">
          <div className="auth-logo">
            <i className="fa-solid fa-book-open me-2"></i>
            iNotebook
          </div>
          <p className="auth-subtitle">Your notes, secured in the cloud</p>
        </div>

        <h2 className="auth-heading">Create account</h2>
        <p className="mb-4" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Join thousands of users managing notes smarter
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="label-dark form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control input-dark"
              id="name"
              name="name"
              placeholder="John Doe"
              onChange={onChange}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="label-dark form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control input-dark"
              id="email"
              name="email"
              placeholder="you@example.com"
              onChange={onChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="label-dark form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control input-dark"
              id="password"
              name="password"
              placeholder="Min. 5 characters"
              required
              minLength={5}
              onChange={onChange}
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label htmlFor="cpassword" className="label-dark form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control input-dark"
              id="cpassword"
              name="cpassword"
              placeholder="Repeat your password"
              required
              minLength={5}
              onChange={onChange}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-gradient w-100"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                Creating account...
              </>
            ) : (
              <>
                <i className="fa-solid fa-user-plus me-2"></i>
                Create Account
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="auth-divider">or</div>
        <p className="text-center mb-0" style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Sign in →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
