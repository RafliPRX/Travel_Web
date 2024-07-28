import { useEffect, useState } from "react"
import Sidebar from "../admin_component/Sidebar"
import './User.css';
import axios from "axios";
import Card_view_feature from "../admin_component/CardView_feature";
import { Link } from "react-router-dom";


const Admin_category = () => {
    const [token, setToken] = useState(null);
    const [category, setCategory] = useState([]);
    const [error, setError] = useState(null);
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
    const del_Category = async (id) => {
        try {
            const response = await axios.delete(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-category/${id}`, {
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
            getCategory();            
        }, 2000);
    },[]);
    console.log(token);
    return (
        <>
            <Sidebar/>
            {error && <h2>{error}</h2>}
            <div className="card-container2"> 
            {category.map((Category) => (
                // eslint-disable-next-line react/jsx-key
              <Card_view_feature nama={Category.name} Image={Category.imageUrl} del={<button onClick={() => del_Category(Category.id)} className="btn outline">DELETE</button>} link={<Link to={`/Admin_category_detail/${Category.id}`}><button className="btn fill">DETAIL</button></Link>}  />
            ))}
            </div>
        </>
    )
}

export default Admin_category