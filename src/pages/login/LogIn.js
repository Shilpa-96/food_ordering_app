import React, { useRef, useState } from "react";

import icon from "./burger.jpg";
import "./login_signup.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

export default function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      setError("");
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      if (userCredential.user) {
        sessionStorage.setItem(
          "Auth Token",
          "authorized"
          // userCredential._tokenResponse.refreshToken
        );
        navigate("/");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError("Failed to log in", errorMessage);
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
        <input type="text" placeholder="Email" ref={emailRef} required />
        <br />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <br />
        <button disabled={loading} onClick={handleSubmit}>
          LogIn
        </button>
        <br />
        <div className="forget-password">
          <p>
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
          <p>
            <Link to="/signup">SignUp</Link>
          </p>
        </div>
        <h4> Continue With</h4>
        <div className="icons-g-i-f">
          <AiFillGoogleCircle color="red" fontSize="48px" />
          <BsInstagram color="red" fontSize="45px" />
          <BsFacebook color="blue" fontSize="45px" />
        </div>
      </div>
    </div>
  );
}
