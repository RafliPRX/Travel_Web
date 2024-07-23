import { useParams } from "react-router-dom";
import Content from "../component/content-detail-activity";
import "./detail.css";
import { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "../component/Hero_Section";
import Footer from "../component/footer";

const Details_activity = () => {
  const param = useParams();  
  const [detil1, setDetail_promo] = useState({});
  const getDetail_promo = async () => {
    try {
        const response = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activity/${param.id}`, {
          headers: {
              apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
              "content-type": "multipart/form-data"
          }
        });
        setDetail_promo(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error.response);
    }
  };
  useEffect(() => {
    getDetail_promo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <HeroSection/>  
      <div className="Blog">
      <div className="frame-parent">
          <div className="our-blog-parent">
          <h1 className="our-blog">Travel to {detil1.title}</h1>
          
          </div>
      </div>
      <Content
      bagian={detil1.city}
      desc_activity = {detil1.description}
      image = {detil1.imageUrls}
      alamat={detil1.address}
      kota={detil1.city}
      prov={detil1.province}
      price={detil1.price}
      discount={detil1.price_discount}
      />
      </div>
      <Footer/>
    </div>    
  );
};

export default Details_activity;