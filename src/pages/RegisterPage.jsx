import React from "react";
import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body py-5">
          <h1 className="text-2xl font-semibold text-center">
            Register Your account{" "}
          </h1>
          <form className="fieldset">
            {/* name */}
            <label className="label">Your Name</label>
            <input type="text" className="input" placeholder="Your name" />
            {/* photo */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="photo url" />
            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p className="font-semibold pt-5">
            Already have an account? please{" "}
            <Link to="/auth/login" className="text-secondary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
