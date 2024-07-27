import PropTypes from "prop-types";
import "./GroupComponent.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GroupComponent1.css";


const GroupComponent = ({ className = "" }) => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const navigate = useNavigate();  
  const [errorLogin, setErrorlogin] = useState(null)
  const handleChangeName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  }

  const handleChangePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  const handleLogin = async (event) => { 
    event.preventDefault();
    const payload = {
        email: Name,
        password: Password,
    };
    try {
        const response = await axios.post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login`, payload, {
            headers: {
                apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                "content-type": "multipart/form-data"
            }
        });
        console.log(response.data.token);
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.data.name);
        localStorage.setItem("Phone", response.data.data.phoneNumber);
        localStorage.setItem("Image", response.data.data.profilePictureUrl);
        localStorage.setItem("email", response.data.data.email);
        localStorage.setItem("role", response.data.data.role);
        setTimeout(() => {
            navigate("/");
        }, 1000);
    } catch (error) {
        console.log(error.response);
        setErrorlogin(error.response.message)
    }
  }
  return (
    <form className={`rectangle-parent ${className}`}>
      {token && <h2>berhasil</h2>}
      {errorLogin && <h2>{errorLogin}</h2>}
      <div className="frame-child" />
      <div className="google-sign-in-button-parent">
        <div className="google-sign-in-button">
          <div className="welcome-to-lorem-parent">
            <a href="/" className="welcome-to-lorem-container">
              <span className="welcome-to">{`Welcome to `}</span>
              <span className="lorem">LOREM</span>
            </a>
            <h1 className="Sign-in">Sign in</h1>
          </div>
        </div>
        <div className="sign-up-button-parent3">
          <div className="sign-up-button3">
            <a href="/Sign-up" className="no-account-container3">
              <p className="no-account3">No Account ?</p>
              <p className="sign-up3">Sign up</p>
            </a>
          </div>
        </div>
      </div>
      <div className="component-parent">
        <div className={`enter-your-username-or-email-a-parent ${className}`}>
          <div className="enter-your-username">Email</div>
          <input onChange={handleChangeName} placeholder="Username" className="username-input-box" type="text" />
        </div>
        <div className="instance-parent">
        <div className={`enter-your-username-or-email-a-parent ${className}`}>
          <div className="enter-your-username">Password</div>
          <input onChange={handleChangePassword} placeholder="Password" className="username-input-box" type="password" />
        </div>
          <div className="forgot-password-button">
            <div className="forgot-password">Forgot Password</div>
          </div>
        </div>
      </div>
      <button onClick={handleLogin} className="rectangle-container">
        <div className="rectangle-div2" />
        <div className="Sign-in2">Sign in</div>
      </button>
    </form>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;