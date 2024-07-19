import PropTypes from "prop-types";
import "./content.css";

const Content = ({ 
    className = "",
    nama_promo,
    desc_promo,
    image_promo,
    syarat,
    code_promo,
    disc_price,
    minim_price
 }) => {
  return (
    <section className={`content ${className}`}>
      <img className="image-container" src={image_promo} alt="" />
      <div className="Text-block">
        <h1 className="beautiful-italy-lets-container">
          <p className="beautiful-italy">{nama_promo} </p>
          <p className="lets-travel">Kode: {code_promo}</p>
        </h1>
        <div className="but-i-must">
          {desc_promo}
        </div>
        <div className="but-i-must">
          Syarat dan ketentuan: {syarat}
        </div>
        <div className="but-i-must">
          Potongan Sekitar {disc_price}
        </div>
        <div className="but-i-must">
          Minimal Beli {minim_price}
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
  nama_promo: PropTypes.string,
  desc_promo: PropTypes.string,
  image_promo: PropTypes.string,
  syarat: PropTypes.string,
  code_promo: PropTypes.string,
  disc_price: PropTypes.string,
  minim_price: PropTypes.string
};

export default Content