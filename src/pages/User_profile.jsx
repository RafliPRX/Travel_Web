import { useEffect, useState } from "react"
import HeroSection from "../component/Hero_Section"
import User_component from "../component/user_profile"
import "./profile.css";

const Profile = () => {
const [nama, setNama] = useState(null);
const [Phone, setPhone] = useState(null);
const [image, setImage] = useState(null);
const [email, setEmail] = useState(null);

useEffect(() => {
    const storageName = localStorage.getItem("username");
    const storagePhone = localStorage.getItem("Phone");
    const storageEmail = localStorage.getItem("email");
    const storageImage = localStorage.getItem("Image");
    
    setNama(storageName);
    setPhone(storagePhone);
    setImage(storageImage);
    setEmail(storageEmail);
},[])
    return (
        <>
        <HeroSection/> <br />
            <User_component nama={nama} pic={image} email={email} role={Phone}/>
        </>
    )
}

export default Profile