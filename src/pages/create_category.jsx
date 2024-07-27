import Sidebar from "../admin_component/Sidebar";
import "./detail_form.css";
import "../admin_component/headline.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create_Category = () => {
  const [nama, setName] = useState("");
  const [image, setImage] = useState("");
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const handleChangeName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  }
  const handleChangeImage = (event) => {
    console.log(event.target.value);
    setImage(event.target.value);
  }

  const create_category = async (event) => {
    event.preventDefault();
    const payload = {
      name: nama,
      imageUrl: image,
  };

    try {
        const response = await axios.post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-category`, payload, {
          headers: {
              apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
              "content-type": "multipart/form-data",
              Authorization: `Bearer ${token}` 
          }
        });
        window.location.reload("/Admin_banner");
        console.log(response.message);
        setTimeout(() => {
          navigate("/Admin_banner")
        }, 1000);
      } catch (error) {
        console.log(error.response);
    }
  };
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);
  return (
    <div>
      <Sidebar/>
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
        <button onClick={create_category} className="button-fill" type="submit">Create</button>
        </form>
      </section>
    </div>
    </div>
  );
};

export default Create_Category;