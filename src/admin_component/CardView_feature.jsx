/* eslint-disable react/prop-types */
import './cardview.css';
import './card.css';
import PropType from 'prop-types'
const Card_view_feature = ({
    nama,
    email,
    desc,
    Image,
    del,
    link,
}) => {
    
    return (
        <>
            <div className="Card">
                <div className="container">
                 <div className="wrapper">
                   <div className="banner-image">
                    <img src={Image} alt="" />
                   </div>
                   <h1 className='NAME'> {nama}</h1>
                   <p className='DETAIL'>{email} <br/>
                     {desc}</p>
                  </div>
                  <div className="button-wrapper">
                    {del} 
                    {link}
                  </div>
                    </div>
            </div>
        </>
    )
}

Card_view_feature.PropType = {
    nama: PropType.string,
    email: PropType.string,
    desc: PropType.string,
    Image: PropType.string,
    del: PropType.func,
    link: PropType.element,
}
export default Card_view_feature