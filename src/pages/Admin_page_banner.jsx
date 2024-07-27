import { useEffect, useState } from "react"
import Sidebar from "../admin_component/Sidebar"
import './User.css';
import axios from "axios";
import Card_view_feature from "../admin_component/CardView_feature";
import { Link } from "react-router-dom";


const Admin_banner = () => {
    const [token, setToken] = useState(null);
    const [banner, setBanner] = useState([]);
    const [error, setError] = useState(null);
    const getBanner = async () => {
        try {
            const response = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners`, {
                headers: {
                    apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                    "content-type": "multipart/form-data",
                    Authorization: `Bearer ${token}` 
                }
            });
            setBanner(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error.response);
            setError(error.response.message);
        }    
    };
    const del_Banner = async (id) => {
        try {
            const response = await axios.delete(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-banner/${id}`, {
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
            setError(error.response.message);
        }    
    };
    useEffect(() => {
        const storeToken = localStorage.getItem("token");
        setToken(storeToken)
        setTimeout(() => {
            getBanner();            
        }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    console.log(token);
    return (
        <>
            <Sidebar/>
            {error && <h2>{error}</h2>}
            <div className="card-container2"> 
            {banner.map((Banner) => (
                // eslint-disable-next-line react/jsx-key
              <Card_view_feature nama={Banner.name} Image={Banner.imageUrl} del={<button onClick={() => del_Banner(Banner.id)} className="btn outline">DELETE</button>} link={<Link to={`/Admin_banner_detail/${Banner.id}`}><button className="btn fill">DETAIL</button></Link>}  />
            ))}
            </div>
        </>
    )
}

export default Admin_banner