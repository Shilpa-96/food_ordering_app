import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../authentication/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import icon from "../login/burger.jpg";
import "../login/login_signup.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      sessionStorage.setItem(
        "Auth Token",
        "authorized"
        // userCredential._tokenResponse.refreshToken
      );
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError("Failed to create an account", errorMessage);
    }

    setLoading(false);
  }
  return (
    <div className="login-signup-container">
      <div className="upper-container">
        <p className="shop-name">Desi food</p>
        <img src={icon} alt="icon" />
      </div>
      <div className="lower-oval-border" />
      <div className="upper-oval-border" />

      <div className="lower">
        {error && <div className="error-message">{error}</div>}
        <input type="text" placeholder="Username" ref={emailRef} required />
        <br />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          ref={passwordConfirmRef}
          required
        />
        <br />
        <button disabled={loading} onClick={handleSubmit}>
          Sign Up
        </button>
        <br />
        <div className="forget-password">
          {/* <p>Forget password?</p> */}
          <p>
            <Link to="/login">Log In</Link>
          </p>
        </div>
        <h4> Or Signup With</h4>
        <div className="icons-g-i-f">
          <AiFillGoogleCircle color="red" fontSize="48px" />
          <BsInstagram color="red" fontSize="45px" />
          <BsFacebook color="blue" fontSize="45px" />
        </div>
      </div>
    </div>
  );
}
