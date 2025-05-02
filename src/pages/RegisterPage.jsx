import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const RegisterPage = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (evt) => {
    evt.preventDefault();
    const name = evt.target.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 character");
      return;
    } else {
      setNameError("");
    }
    const email = evt.target.email.value;
    const photo = evt.target.photo.value;
    const password = evt.target.password.value;
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body py-5">
          <h1 className="text-2xl font-semibold text-center">
            Register Your account{" "}
          </h1>
          <form onSubmit={handleRegister} className="fieldset">
            {/* name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your name"
              required
            />
            {/* photo */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="photo url"
              required
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            {nameError && <p className="text-xs text-error">{nameError}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
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
