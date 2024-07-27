import axios from "axios";
import PropTypes from "prop-types";
import Adm_icon from '../assets/device-imac.svg';
import user_icon from '../assets/users.svg';
import logout_icon from '../assets/logout.svg';
const Action = ({
    nama,
    Phone,
    Image,
    token,
}) => {
    function menuToggle() {
        const toggleMenu = document.querySelector(".menu");
        toggleMenu.classList.toggle("active");
      } 
    const handleLogout = async () => {
        try {
            const response = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/logout`, {
                headers: {
                    apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                    "content-type": "multipart/form-data",
                     Authorization: `Bearer ${token}` 
                }
              });
            console.log(response.message);
            window.location.reload();
            localStorage.clear();
        } catch (error) {
            console.error(error);
        }        
    }   
    return (
        <div className="action">
        <div className="profile" onClick={menuToggle}>
          <img src={Image} alt="" />
        </div>
        <div className="menu">
        <h3>{nama}<br /><span>{Phone}</span></h3>
        <ul>
          <li>
            <img src={user_icon} /><a href="/Profile">My profile</a>
          </li>
          <li>
            <img src={Adm_icon} /><a href="/Admin">Admin</a>
          </li>
          <li>
            <img src={logout_icon} /><a onClick={handleLogout} href="#" >Logout</a>
          </li>
        </ul>
        </div>
      </div>

    )
}
Action.propTypes = {
    nama: PropTypes.string,
    Phone: PropTypes.string,
    Image: PropTypes.string,
    token: PropTypes.string,
  };
  export default Action