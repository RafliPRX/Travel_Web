import PropTypes from "prop-types";
import "./Sign-upComponent1.css";

const Sign_upComponent1 = ({ className = "", userName, userName1 }) => {
  return (
    <div className={`user-name-parent ${className}`}>
      <div className="user-name">{userName}</div>
      <input className="contact-boxes" type="text" />
      <div className="user-name1">{userName1}</div>
    </div>
  );
};

Sign_upComponent1.propTypes = {
  className: PropTypes.string,
  userName: PropTypes.string,
  userName1: PropTypes.string,
};

export default Sign_upComponent1;