import PropTypes from "prop-types";
import "./user_prof.css";

const User_component = ({ 
    className = "",
    nama,
    email,
    role,
    pic
}) => {
  return (
    <div className={`ativated-link ${className}`}>
      <div className="user">
        <h2 className="user-profile">User Profile</h2>
        <img
          className="user-badge-icon"
          loading="lazy"
          alt=""
          src="/vector-75.svg"
        />
      </div>
      <section className="content">
        <div className="left-panel">
          <div className="wrapper-group-16">
            <img
              className="wrapper-group-16-child"
              loading="lazy"
              alt=""
              src={pic}
            />
          </div>
          <div className="user-info">
            <div className="name">
              <a className="alaa-mohamed">{nama}</a>
              <a className="product-design">{role}</a>
              <div className="eastern-european-time">
                {email}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="user-status-icons-wrapper">
        <img className="user-status-icons" alt="" src="/vector-75-1.svg" />
      </div>
    </div>
  );
};

User_component.propTypes = {
  className: PropTypes.string,
  nama: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
  pic: PropTypes.string
};

export default User_component;