import { useEffect, useState } from "react";
import ColBlock from "./Col-block";
import "./destinations.css";
import Navigation1 from "./Navigation";
import axios from "axios";
import Navigation2 from "./Navigation2";
import Navigation3 from "./Navigation3";
import { Link } from "react-router-dom";

const Destinations = () => {
  // API banner
    const [banner, setBanner] = useState([]);
    const getBanner = async () => {
        try {
          const response = await axios.get("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners", {
            headers: {
                apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                "content-type": "multipart/form-data"
            }
          });
          setBanner(response.data.data);
          console.log(response.data.data);
        } catch (error) {
          console.log(error.response);
        }
      };
      useEffect(() => {
        getBanner();
      }, []);
      // console.log(banner);
    
    // API promo
    const [promos, setPromos] = useState([]);
    const getPromos = async () => {
      try {
        const response = await axios.get("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos", {
          headers: {
              apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
              "content-type": "multipart/form-data"
          }
        });
        setPromos(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    useEffect(() => {
      getPromos();
    }, []);

  // API Category
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    try {
      const response = await axios.get("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories", {
        headers: {
            apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
            "content-type": "multipart/form-data"
        }
      });
      setCategory(response.data.data);
      console.log(response.data.data);
    } catch {
      // eslint-disable-next-line no-undef
      console.log(error.response);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="destinations">
      <Navigation1/>
      <section className="Content">
        {banner.map((baner) => (
          // eslint-disable-next-line react/jsx-key
          <Link to={`/detail/${baner?.id}`}>
            <ColBlock
            monumentOfBerlin={baner.name}
            location1={baner.imageUrl}
            />
          </Link>
        ))}
      </section>
      <Navigation2/>
        <section className="Content">
          {promos.map((promo) => (
            // eslint-disable-next-line react/jsx-key
            <Link to={`/detail-promo/${promo.id}`} >
            <ColBlock
              code={promo.promo_code}
              monumentOfBerlin={promo.title}
              location1={promo.imageUrl}
              berlinGermany={promo.description}
              price={promo.promo_discount_price}
            />
            </Link>
          ))}
        </section>
      <Navigation3/>
        <section className="Content">
          {category.map((category) => (
            // eslint-disable-next-line react/jsx-key
            <Link to={`/categorized/${category.id}`} >
            <ColBlock
              monumentOfBerlin={category.name}
              location1={category.imageUrl}
            />
            </Link>
          ))}
        </section>
    </div>
  );
};

export default Destinations;