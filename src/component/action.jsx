import axios from "axios";
import "./header.css";
import PropTypes from "prop-types";
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
            <img src="./assets/icons/user.png" /><a href="#">My profile</a>
          </li>
          <li>
            <img src="./assets/icons/log-out.png" /><a onClick={handleLogout} >Logout</a>
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