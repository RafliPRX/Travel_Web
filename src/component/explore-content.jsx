import Card from "./card";
import PropTypes from "prop-types";
import "./card-grid.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navigation4 from "./Navigation_explore";
import "./explore-content.css"

const Explore_content = ({ className = "" }) => {
  const [activity, setActivity] = useState([]);
  const getActivity = async () => {
    try {
        const response = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities`, {
            headers: {
                apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                "content-type": "multipart/form-data"
            }
        });
        setActivity(response.data.data);
    } catch (error) {
        console.log(error.response);
    }
  };
  useEffect(() => {
    getActivity();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
  <div className="explore_content">
    <Navigation4/>
    <div className={`card-grid ${className}`}>
      {activity.map((activ) => (
        // eslint-disable-next-line react/jsx-key
        <Link to={`/activity-detail/${activ.id}`} >
          <Card title={activ.title} image={activ.imageUrls} date={activ.price} />
        </Link>
      ))}  
    </div>
  </div>
  );
};

Explore_content.propTypes = {
  className: PropTypes.string,
};

export default Explore_content;