import Sidebar from "../admin_component/Sidebar";
import "./detail_form.css";
import "../admin_component/headline.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create_Activ = () => {
  const [category, setCategory] = useState([]);
  const [nama, setName] = useState("");
  const [image, setImage] = useState({});
  const [desc, setDesc] = useState("");
  const [facilities, setFacility] = useState("");
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);
  const [minim, setMinimPrice] = useState(0);
  const [token, setToken] = useState(null);
  const [selected_categ, setSelectedCateg] = useState("");
  const [address, setAdress] = useState("");
  const [prov, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [Rate, setRate] = useState("");
  const navigate = useNavigate();
  const handleChangeName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  }
  const handleChangeRate = (event) => {
    console.log(event.target.value);
    setRate(event.target.value);
  }
  const handleChangeProv = (event) => {
    console.log(event.target.value);
    setProvince(event.target.value);
  }
  const handleChangeCity = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  }
  const handleChangeDesc = (event) => {
    console.log(event.target.value);
    setDesc(event.target.value);
  }
  const handleSelectChange = (event) => {
    console.log(event.target.value);
    setSelectedCateg(event.target.value);
  };
  const handleChangeFacility = (event) => {
    console.log(event.target.value);
    setFacility(event.target.value);
  }
  const handleChangeTotal = (event) => {
    console.log(event.target.value);
    setTotal(event.target.value);
  }
  const handleChangePrice = (event) => {
    const discValue = Number(event.target.value);
    console.log(event.target.value);
    setPrice(event.target.value);
  }
  const handleChangePriceMin= (event) => {
    const minimValue = Number(event.target.value);
    console.log(event.target.value);
    setMinimPrice(event.target.value);
  }

  const handleChangeAdress = (event) => {
    console.log(event.target.value);
    setAdress(event.target.value);
  }
  const handleChangeImage = (event) => {
    console.log(event.target.value);
    setImage(event.target.value);
  }
  const create_Activ = async (event) => {
    event.preventDefault();
    const payload = {
      categoryId: selected_categ,
      title: nama,
      description: desc,
      imageUrls: Array(image),
      price: Number(price),
      price_discount: Number(minim),
      rating: Number(Rate),
      total_reviews: Number(total),
      facilities: facilities,
      address: address,
      province: prov,
      city: city,
      location_maps: null
  };
    try {
        const response = await axios.post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-activity`, payload, {
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
  const getCategory = async () => {
    try {
        const response = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories`, {
            headers: {
                apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                "content-type": "multipart/form-data",
                Authorization: `Bearer ${token}` 
            }
        });
        setCategory(response.data.data);
        console.log(response.data.data);
    } catch (error) {
        console.log(error.response);
        setError(error.response.message);
    }    
  };
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
    getCategory();
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
          <label htmlFor="">Category</label>
          <select onChange={handleSelectChange} value={selected_categ} name="" id="">
            {category.map((Categ) => (
              <option key={Categ.id} value={Categ.id}>{Categ.name}</option>
            ))}
          </select>
          <label htmlFor="">Image URL</label>
          <input onChange={handleChangeImage} type="text" name="" id="" />
          <label htmlFor="">Description</label>
          <input onChange={handleChangeDesc} type="text" name="" id="" />
          <label htmlFor="">Rating</label>
          <input onChange={handleChangeRate} type="number" name="" id="" />
          <label htmlFor="">Total Reviews</label>
          <input onChange={handleChangeTotal} type="number" name="" id="" />
          <label htmlFor="">Price</label>
          <input onChange={handleChangePrice} type="number" name="" id="" />
          <label htmlFor="">Discount</label>
          <input onChange={handleChangePriceMin} type="number" name="" id="" />
          <label htmlFor="">Facility</label>
          <input onChange={handleChangeFacility} type="text" name="" id="" />
          <label htmlFor="">address</label>
          <input onChange={handleChangeAdress} type="text" name="" id="" />
          <label htmlFor="">Province</label>
          <input onChange={handleChangeProv} type="text" name="" id="" />
          <label htmlFor="">City</label>
          <input onChange={handleChangeCity} type="text" name="" id="" />
          
        </div><br />
        <button onClick={create_Activ} className="button-fill" type="submit">Create</button>
        </form>
      </section>
    </div>
    </div>
  );
};

export default Create_Activ;