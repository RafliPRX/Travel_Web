import PropTypes from "prop-types";
import "./content.css";

const Content = ({ 
    className = "",
    name,
    image,
    nama_promo,
    desc_promo,
 }) => {
  return (
    <section className={`content ${className}`}>
      <img className="image-container" src={image} alt="" />
      <div className="Text-block">
        <h1 className="beautiful-italy-lets-container">
          <p className="beautiful-italy">{name} {nama_promo} </p>
          <p className="lets-travel">Let’s travel</p>
        </h1>
        <div className="but-i-must">
          {desc_promo}
        </div>
        <div className="read-more">
          <div className="read-more1">Read More</div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  nama_promo: PropTypes.string,
  desc_promo: PropTypes.string,
  image_promo: PropTypes.string,
  syarat: PropTypes.string,
  code_promo: PropTypes.string,
  disc_price: PropTypes.string,
  minim_price: PropTypes.string
};

export default Content