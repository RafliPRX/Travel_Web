import PropTypes from "prop-types";
import "./GroupComponent1.css";

const GroupComponent1 = ({
  className = "",
  enterYourUsernameOrEmailA,
  usernameOrEmailAddress,
}) => {
  return (
    <div className={`enter-your-username-or-email-a-parent ${className}`}>
      <div className="enter-your-username">{enterYourUsernameOrEmailA}</div>
      <input className="username-input-box" type="text" />
      <div className="username-or-email">{usernameOrEmailAddress}</div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  enterYourUsernameOrEmailA: PropTypes.string,
  usernameOrEmailAddress: PropTypes.string,
};

export default GroupComponent1;