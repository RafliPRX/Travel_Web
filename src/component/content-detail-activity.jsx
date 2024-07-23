import PropTypes from "prop-types";
import "./content.css";

const Content = ({ 
    className = "",
    bagian,
    desc_activity,
    image,
    alamat,
    kota,
    prov,
    price,
    discount
 }) => {
  return (
    <section className={`content ${className}`}>
      <img className="image-container" src={image} alt="" />
      <div className="Text-block">
        <h1 className="beautiful-italy-lets-container">
          <p className="beautiful-italy">Part of {bagian}</p>
        </h1>
        <div className="but-i-must">
          {desc_activity}
        </div>
        <div className="but-i-must">
          description: {desc_activity}
        </div>
        <div className="but-i-must">
          address: {alamat}, {kota}, {prov}
        </div>
        <div className="but-i-must">
          With Price From {price} to {discount}
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  bagian: PropTypes.string,
  desc_activity: PropTypes.string,
  image: PropTypes.string,
  alamat: PropTypes.string,
  kota: PropTypes.string,
  prov: PropTypes.string,
  price: PropTypes.string,
  discount: PropTypes.string,
};

export default Content