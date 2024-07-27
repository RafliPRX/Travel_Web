import Sidebar from "../admin_component/Sidebar";
import "./detail_form.css";
import "../admin_component/headline.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create_Promo = () => {
  const [nama, setName] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [syarat, setSyarat] = useState("");
  const [code, setCode] = useState("");
  const [disc, setDisc] = useState("");
  const [minim, setMinim] = useState("");
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const handleChangeName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  }
  const handleChangeDesc = (event) => {
    console.log(event.target.value);
    setDesc(event.target.value);
  }
  const handleChangeSyarat = (event) => {
    console.log(event.target.value);
    setSyarat(event.target.value);
  }
  const handleChangeCode = (event) => {
    console.log(event.target.value);
    setCode(event.target.value);
  }
  const handleChangeDisc = (event) => {
    const discValue = Number(event.target.value);
    console.log(event.target.value);
    setDisc(event.target.value);
  }
  const handleChangeMinim = (event) => {
    const minimValue = Number(event.target.value);
    console.log(event.target.value);
    setMinim(event.target.value);
  }

  const handleChangeImage = (event) => {
    console.log(event.target.value);
    setImage(event.target.value);
  }

  const create_promo = async (event) => {
    event.preventDefault();
    const payload = {
      title: nama,
      imageUrl: image,
      description: desc,
      terms_condition: syarat,
      promo_code: code,
      promo_discount_price: Math.floor(disc),
      minimum_claim_price: Math.floor(minim) 
  };

    try {
        const response = await axios.post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-promo`, payload, {
          headers: {
              apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
              "content-type": "application/json",
              Authorization: `Bearer ${token}` 
          }
        });
        console.log(response);
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
          <label htmlFor="">Description</label>
          <input onChange={handleChangeDesc} type="text" name="" id="" />
          <label htmlFor="">Terms & condition</label>
          <input onChange={handleChangeSyarat} type="text" name="" id="" />
          <label htmlFor="">Promo Code</label>
          <input onChange={handleChangeCode} type="text" name="" id="" />
          <label htmlFor="">Promo Discount</label>
          <input onChange={handleChangeDisc} type="number" name="" id="" />
          <label htmlFor="">Minimum Claim Price</label>
          <input onChange={handleChangeMinim} type="number" name="" id="" />
        </div><br />
        <button onClick={create_promo} className="button-fill" type="submit">Create</button>
        </form>
      </section>
    </div>
    </div>
  );
};

export default Create_Promo;