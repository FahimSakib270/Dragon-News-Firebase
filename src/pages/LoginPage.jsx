import React from "react";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body py-5">
          <h1 className="text-2xl font-semibold text-center">
            Login Your account{" "}
          </h1>
          <form className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
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
