import "./sidebar.css";
import Banner from '../assets/flag-3.svg';
import Disc from '../assets/discount.svg';
import User from '../assets/users.svg';
import Categ from '../assets/category.svg';
import Activ from '../assets/plane.svg';
import { useEffect, useState } from "react";
import plus from '../assets/circle-plus.svg'
// eslint-disable-next-line react/prop-types
const Sidebar = () => {
  const [username, setUsername] = useState(null);
  const [image, setImage] = useState(null);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const storeUsername = localStorage.getItem("username");
    const storeImage = localStorage.getItem("Image");
    
    setUsername(storeUsername);
    setImage(storeImage);

  })
  return (
    <>
	<header className="menu-wrap">
		<figure className="user">
			<div className="user-avatar">
                <img src={image} alt="" />
			</div>
			<figcaption>
				{username}
			</figcaption>
			
		</figure>
		<a style={{ marginLeft: '47px', backgroundColor: 'blue', color: 'white', padding: '5px', borderRadius: '5px', textDecoration: 'none' }} href="/">
			Back to User Page
		</a>		
		<nav>
			<section className="dicover">
				<h3>Dashboard</h3>
				
				<ul>
                    <li>
						<a href="/admin">
                            <img src={User} alt="" />
							User
						</a>
					</li>

					<li>
						<a href="/Admin_banner">
                            <img src={Banner} alt="" />
							Banner
							<a href="/Create_Banner">
								<img src={plus} alt="" />
							</a>
						</a>
					</li>
					
					<li>
						<a href="/Admin_Promo">
                            <img src={Disc} alt="" />
							Promo
							<a href="/Create_Promo">
								<img src={plus} alt="" />
							</a>
						</a>
					</li>
					
					<li>
						<a href="/Admin_Category">
                            <img src={Categ} alt="" />
							Categories
							<a href="/Create_Category">
								<img src={plus} alt="" />
							</a>
						</a>
					</li>
					
					<li>
						<a href="/Admin_Activ">
                            <img src={Activ} alt="" />
							Activity
							<a href="/Create_Activ">
								<img src={plus} alt="" />
							</a>
						</a>
					</li>
				</ul>
			</section>		
		</nav>
	</header>
    </>
  )
}

export default Sidebar