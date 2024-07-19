import { useParams } from "react-router-dom";
import Content from "../component/content-detail-promo";
import "./detail.css";
import { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "../component/Hero_Section";
import Footer from "../component/footer";

const Details_promo = () => {
  const param = useParams();  
  const [detil1, setDetail_promo] = useState({});
  const getDetail_promo = async () => {
    try {
        const response = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${param.id}`, {
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
  }, []);
  return (
    <div>
      <HeroSection/>  
      <div className="Blog">
      <div className="frame-parent">
          <div className="our-blog-parent">
          <h1 className="our-blog">Promo {detil1.title}</h1>
          <div className="frame-child" />
          </div>
      </div>
      <Content
      nama_promo = {detil1.title}
      desc_promo = {detil1.description}
      image_promo = {detil1.imageUrl}
      syarat = {detil1.terms_condition}
      code_promo = {detil1.promo_code}
      disc_price = {detil1.promo_discount_price}
      minim_price = {detil1.minimum_claim_price}
      />
      </div>
      <Footer/>
    </div>    
  );
};

export default Details_promo;