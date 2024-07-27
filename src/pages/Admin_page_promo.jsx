import { useEffect, useState } from "react"
import Sidebar from "../admin_component/Sidebar"
import './User.css';
import axios from "axios";
import Card_view_feature from "../admin_component/CardView_feature";
import { Link } from "react-router-dom";


const Admin_promo = () => {
    const [token, setToken] = useState(null);
    const [promo, setPromo] = useState([]);
    const [error, setError] = useState(null);
    const getPromo = async () => {
        try {
            const response = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos`, {
                headers: {
                    apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                    "content-type": "multipart/form-data",
                    Authorization: `Bearer ${token}` 
                }
            });
            setPromo(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error.response);
            setError(error.response.message);
        }    
    };
    const del_Promo = async (id) => {
        try {
            const response = await axios.delete(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-promo/${id}`, {
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
            getPromo();            
        }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    console.log(token);
    return (
        <>
            <Sidebar/>
            {error && <h2>{error}</h2>}
            <div className="card-container2"> 
            {promo.map((Promo) => (
                // eslint-disable-next-line react/jsx-key
              <Card_view_feature nama={Promo.title} Image={Promo.imageUrl} desc={Promo.description} del={<button onClick={() => del_Promo(Promo.id)} className="btn outline">DELETE</button>} link={<Link to={`/Admin_promo_detail/${Promo.id}`}><button className="btn fill">DETAIL</button></Link>}  />
            ))}
            </div>
        </>
    )
}

export default Admin_promo