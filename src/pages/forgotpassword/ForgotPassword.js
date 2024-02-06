import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../authentication/AuthContext";
import icon from "../login/burger.jpg";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default function ForgotPassword() {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await sendPasswordResetEmail(auth, emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
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
      {error && <div className="error-message">{error}</div>}
      {message && <div className="reset_password_message">{message}</div>}
      <div className="lower">
        <input type="text" placeholder="Email" ref={emailRef} required />
        <br />
        <button disabled={loading} onClick={handleSubmit}>
          Reset Password
        </button>
        <br />
        <div className="forget-password">
          {/* <p>
            <Link to="/forgot-password">Forgot Password?</Link>
          </p> */}
          <p>
            <Link to="/signup">SignUp</Link>
          </p>
        </div>
        {/* <h4> Continue With</h4>
        <div className="icons-g-i-f">
          <AiFillGoogleCircle color="red" fontSize="48px" />
          <BsInstagram color="red" fontSize="45px" />
          <BsFacebook color="blue" fontSize="45px" />
        </div> */}
      </div>
    </div>
  );
}
