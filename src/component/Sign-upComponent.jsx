import PropTypes from "prop-types";
import "./Sign-upComponent.css";
import Sign_upComponent2 from "./Sign-upComponent2";
import Sign_upComponent1 from "./Sign-upComponent1";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sign_upComponent = ({ className = "" }) => {
  
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [rePassword, setrePassword] = useState("");
  const [Phone, setPhone] = useState("");
  const navigate = useNavigate();
  const handleChangeEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  const handleChangePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  const handleChangerePassword = (event) => {
    console.log(event.target.value);
    setrePassword(event.target.value);
  }

  const handleChangePhone = (event) => {
    console.log(event.target.value);
    setPhone(event.target.value);
  }

  const handleChangeName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  }

  const handleSign_up = async (event) => {
    event.preventDefault();
    const payload = {
      email: Email,
      name: Name,
      password: Password,
      passwordRepeat: rePassword,
      role: "user",
      phoneNumber: Phone
    };
    try {
      const response = await axios.post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register`, payload, {
        headers: {
            apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
            "content-type": "multipart/form-data"
        }
    });
    console.log(response.data.data);
    setTimeout(() => {
      navigate("/login")
    }, 1000);
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <form className={`rectangle-parent ${className}`}>
      <div className="frame-child" />
      <div className="welcome">
        <div className="welcome-message">
          <div className="welcome-to-lorem-container">
            <span className="welcome-to">{`Welcome to `}</span>
            <span className="lorem">LOREM</span>
          </div>
          <h1 className="sign-up">Sign up</h1>
        </div>
        <div className="sign-in">
          <a href="/login" className="have-an-account-container">
            <p className="have-an-account">Have an Account ?</p>
            <p className="sign-in1">Sign in</p>
          </a>
        </div>
      </div>
      <div className="credentials">
        <Sign_upComponent2
          onChange={handleChangeEmail}
          enterYourUsernameOrEmailA="Enter your username or email address"
          usernameOrEmailAddress=""
        />
        <div className="contact-info">
          <Sign_upComponent1 onChange={handleChangeName} userName="User name" userName1="" />
          <Sign_upComponent1
            onChange={handleChangePhone}
            userName="Contact Number"
            userName1=""
          />
        </div>
        <Sign_upComponent2
          onChange={handleChangePassword}
          enterYourUsernameOrEmailA="Enter your Password"
          usernameOrEmailAddress=""
        />
        <Sign_upComponent2
          onChange={handleChangerePassword}
          enterYourUsernameOrEmailA="Enter your Password Again"
          usernameOrEmailAddress=""
        />

      </div>
      <button onClick={handleSign_up} className="rectangle-group">
        <div className="frame-item" />
        <div className="sign-up1">Sign up</div>
      </button>
    </form>
  );
};

Sign_upComponent.propTypes = {
  className: PropTypes.string,
};

export default Sign_upComponent;