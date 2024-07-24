import PropTypes from "prop-types";
import "./Sign-upComponent2.css";

const Sign_upComponent2 = ({
  className = "",
  enterYourUsernameOrEmailA,
  usernameOrEmailAddress,
  onChange
}) => {
  return (
    <div className={`enter-your-username-or-email-a-parent ${className}`}>
      <div className="enter-your-username">{enterYourUsernameOrEmailA}</div>
      <input onChange={onChange} className="input-boxes" type="text" />
      <div className="username-or-email">{usernameOrEmailAddress}</div>
    </div>
  );
};

Sign_upComponent2.propTypes = {
  className: PropTypes.string,
  enterYourUsernameOrEmailA: PropTypes.string,
  usernameOrEmailAddress: PropTypes.string,
  onChange: PropTypes.func
};

export default Sign_upComponent2;