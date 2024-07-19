import PropTypes from "prop-types";
import "./navigation1.css";

const Navigation2 = ({ className = "" }) => {
  return (
    <section className={`navigation ${className}`}>
      <h1 className="popular-destinations">Promo</h1>
      <div className="divider-parent">
        <div className="divider" />
        <div className="chevron-container">
          <div className="most-popular-destinations-arou-wrapper">
            <div className="most-popular-destinations">
              Big Promo On the way
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Navigation2.propTypes = {
  className: PropTypes.string,
};

export default Navigation2;