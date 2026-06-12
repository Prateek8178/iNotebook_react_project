import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email.trim(),
          password: credentials.password.trim(),
        }),
      });
      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        props.showAlert("Login successful! Welcome back 👋", "success");
        navigate("/");
      } else {
        props.showAlert("Invalid credentials. Please try again.", "danger");
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

        <h2 className="auth-heading">Welcome back</h2>
        <p className="mb-4" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Sign in to access your notes
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="label-dark form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control input-dark"
              value={credentials.email}
              onChange={onChange}
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="label-dark form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control input-dark"
              value={credentials.password}
              id="password"
              name="password"
              placeholder="••••••••"
              onChange={onChange}
              required
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
                Signing in...
              </>
            ) : (
              <>
                <i className="fa-solid fa-right-to-bracket me-2"></i>
                Sign In
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="auth-divider">or</div>
        <p className="text-center mb-0" style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          Don't have an account?{" "}
          <Link to="/signup" className="auth-link">
            Create one free →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
