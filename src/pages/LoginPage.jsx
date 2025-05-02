import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const LoginPage = () => {
  const [error, setError] = useState("");
  const { Login } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (evt) => {
    evt.preventDefault();
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    Login(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;

        setError(errorCode);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body py-5">
          <h1 className="text-2xl font-semibold text-center">
            Login Your account{" "}
          </h1>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </form>
          <p className="font-semibold pt-5">
            Don't have an account? please{" "}
            <Link to="/auth/register" className="text-secondary">
              register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
