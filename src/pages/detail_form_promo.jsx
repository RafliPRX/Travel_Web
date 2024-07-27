import Sidebar from "../admin_component/Sidebar";
import "./detail_form.css";
import PropTypes from "prop-types";
import "../admin_component/headline.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail_form_promo = ({ className }) => {
  const param = useParams();
  const [nama, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [syarat, setSyarat] = useState("");
  const [code, setCode] = useState("");
  const [disc, setDisc] = useState("");
  const [minim, setMinim] = useState("");

  const [image, setImage] = useState("");
  const [detil, setDetail] = useState({});
  const [token, setToken] = useState(null);
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
    console.log(discValue);
    setDisc(discValue);
  }
  const handleChangeMinim = (event) => {
    const minimValue = Number(event.target.value);
    console.log(minimValue);
    setMinim(minimValue);
  }

  const handleChangeImage = (event) => {
    console.log(event.target.value);
    setImage(event.target.value);
  }

  const getDetail = async () => {
    try {
        const response = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${param.id}`, {
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
  const Update_promo = async (event) => {
    event.preventDefault();
    const payload = {
      title: nama,
      imageUrl: image,
      description: desc,
      terms_condition: syarat,
      promo_code: code,
      promo_discount_price: disc,
      minimum_claim_price: minim
  };

    try {
        const response = await axios.post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-promo/${param.id}`, payload, {
          headers: {
              apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
              "content-type": "application/json",
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
            <a className="headline">{detil.title}</a>
            <div className="published-date">{detil.promo_code}</div>
            <div className="published-date">syarat {detil.terms_condition}</div>
            <div className="supporting-text">
              <p className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</p>
              <p className="duis-aute-irure">
              {detil.description} <br /><br />
              discount: {detil.promo_discount_price} <br />
              Minimum bought: {detil.minimum_claim_price}
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
        <button onClick={Update_promo} className="button-fill" type="submit">Save</button>
        </form>
      </section>
    </div>
    </div>
  );
};

Detail_form_promo.PropTypes = {
  className: PropTypes.string
}
export default Detail_form_promo;