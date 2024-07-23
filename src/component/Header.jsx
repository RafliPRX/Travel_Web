import PropTypes from "prop-types";
import "./header.css";

const Header = ({ className = "" }) => {
  return (
    <div className={`header ${className}`}>
      <div className="logo-wrapper">
        <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
      </div>
      <div className="nav-options-wrapper">
        <div className="nav-options">
          <div className="home-link">
            <a href="/" className="home">Home</a>
            <div className="underline" />
          </div>
          <a href="/explore" className="explore">Explore</a>
          <a className="travel">Travel</a>
          <a className="blog">Blog</a>
        </div>
      </div>
      <div className="frame-parent">
        <div className="login-wrapper">
          <a href="/login" className="login">Login</a>
        </div>
        <button className="btn_sign_up">
          <a href="/Sign-up" className="sign_up">Sign up</a>
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;