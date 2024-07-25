import "./sidebar.css";
import Banner from '../assets/flag-3.svg';
import Disc from '../assets/discount.svg';
import User from '../assets/users.svg';
import Categ from '../assets/category.svg';
import Activ from '../assets/plane.svg';
import { useEffect, useState } from "react";
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
						<a href="#">
                            <img src={Banner} alt="" />
							Banner
						</a>
					</li>
					
					<li>
						<a href="#">
                            <img src={Disc} alt="" />
							Promo
						</a>
					</li>
					
					<li>
						<a href="#">
                            <img src={Categ} alt="" />
							Categories
						</a>
					</li>
					
					<li>
						<a href="#">
                            <img src={Activ} alt="" />
							Activity
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