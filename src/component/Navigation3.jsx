import PropTypes from "prop-types";
import "./navigation1.css";

const Navigation3 = ({ className = "" }) => {
  return (
    <section className={`navigation ${className}`}>
      <h1 className="popular-destinations">Categorized</h1>
      <div className="divider-parent">
        <div className="divider" />
        <div className="chevron-container">
          <div className="most-popular-destinations-arou-wrapper">
            <div className="most-popular-destinations">
              Find The most suitable destinations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Navigation3.propTypes = {
  className: PropTypes.string,
};

export default Navigation3;