import { useParams } from "react-router-dom";
import Content from "../component/content-detail";
import "./detail.css";
import { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "../component/Hero_Section";
import Footer from "../component/footer";

const Details = () => {
  const param = useParams();  
  const [detil, setDetail] = useState({});

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
  useEffect(() => {
    getDetail();
  }, []);

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
          <h1 className="our-blog">Our Blog</h1>
          <div className="frame-child" />
          </div>
          <div className="an-insight-the">
          An insight the incredible experience in the world
          </div>
      </div>
      <Content
      name={detil.name}
      image={detil.imageUrl}
      />
      </div>
      <Footer/>
    </div>    
  );
};

export default Details;