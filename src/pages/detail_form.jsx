import Sidebar from "../admin_component/Sidebar";
import "./detail_form.css";
import PropTypes from "prop-types";
import "../admin_component/headline.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail_form = ({ className }) => {
  const param = useParams();
  const [nama, setName] = useState("");
  const [image, setImage] = useState("");
  const [detil, setDetail] = useState({});
  const [token, setToken] = useState(null);
  const handleChangeName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  }
  const handleChangeImage = (event) => {
    console.log(event.target.value);
    setImage(event.target.value);
  }

  const getDetail = async () => {
    try {
        const response = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banner/${param.id}`, {
          headers: {
              apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
              "content-type": "multipart/form-data"
          }
        });
        setDetail(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error.response);
    }
  };
  const Update_banner = async (event) => {
    event.preventDefault();
    const payload = {
      name: nama,
      imageUrl: image,
  };

    try {
        const response = await axios.post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-banner/${param.id}`, payload, {
          headers: {
              apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
              "content-type": "multipart/form-data",
              Authorization: `Bearer ${token}` 
          }
        });
        window.location.reload();
        console.log(response.message);
      } catch (error) {
        console.log(error.response);
    }
  };
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
    getDetail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Sidebar/>
      <section className={`Header2 ${className}`}>
        <img className="image-icon" loading="lazy" alt="" src={detil.imageUrl} />
        <div className="text-column">
          <div className="headline-supporting-text">
            <a className="headline">{detil.name}</a>
            <div className="published-date">Published date</div>
            <div className="supporting-text">
              <p className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</p>
              <p className="duis-aute-irure">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    <div className="page">
      <section className="input-parent">
        <div className="input">
          <div className="base">
            <div className="label">Label</div>
            <div className="input-icon">
              <div className="input1">
                <div className="input-value">
                  <div className="input-text">Input</div>
                  <div className="cursor">
                    <div className="div" />
                  </div>
                </div>
                <img
                  className="inside-icon-container"
                  alt=""
                  src="/inside-icon-container.svg"
                />
              </div>
              <img
                className="outside-icon-container"
                alt=""
                src="/outside-icon-container@2x.png"
              />
            </div>
            <div className="hint-error">Hint or Error Message</div>
          </div>
        </div>
        <form action="">
        <div className="input-group">
          <label htmlFor="">Name</label>
          <input onChange={handleChangeName} type="text" name="" id="" />
          <label htmlFor="">Image URL</label>
          <input onChange={handleChangeImage} type="text" name="" id="" />
        </div><br />
        <button onClick={Update_banner} className="button-fill" type="submit">Save</button>
        </form>
      </section>
    </div>
    </div>
  );
};

Detail_form.PropTypes = {
  className: PropTypes.string
}
export default Detail_form;