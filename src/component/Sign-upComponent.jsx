import PropTypes from "prop-types";
import "./Sign-upComponent.css";
import Sign_upComponent2 from "./Sign-upComponent2";
import Sign_upComponent1 from "./Sign-upComponent1";

const Sign_upComponent = ({ className = "" }) => {
  
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
          enterYourUsernameOrEmailA="Enter your username or email address"
          usernameOrEmailAddress=""
        />
        <div className="contact-info">
          <Sign_upComponent1 userName="User name" userName1="" />
          <Sign_upComponent1
            userName="Contact Number"
            userName1=""
          />
        </div>
        <Sign_upComponent2
          enterYourUsernameOrEmailA="Enter your Password"
          usernameOrEmailAddress=""
        />
      </div>
      <button className="rectangle-group">
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