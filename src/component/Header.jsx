import PropTypes from "prop-types";
import "./header.css";
import { useEffect, useState } from "react";
import Action from "./action";
import Action2 from "./action2";

const Header = ({ className = "" }) => {
  // eslint-disable-next-line no-unused-vars
  const [username, setUsername] = useState(null);
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const storeUsername = localStorage.getItem("username");
    const storeImage = localStorage.getItem("Image");
    const storePhone = localStorage.getItem("Phone");
    const storeToken = localStorage.getItem("token");
    if (storeUsername) {
      setUsername(storeUsername);
      setImage(storeImage);
      setPhone(storePhone);
      setToken(storeToken)
      setIsLoggedIn(true)
    }
  })
  console.log(localStorage);
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
      {isLoggedIn ? <Action nama={username} Phone={phone} Image={image} token={token}/> : <Action2/> }
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;