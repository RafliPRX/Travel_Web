import PropTypes from "prop-types";
import "./navigation1.css";

const Navigation4 = ({ className = "" }) => {
  return (
    <section className={`navigation ${className}`}>
      <h1 className="popular-destinations">Explore</h1>
      <div className="divider-parent">
        <div className="divider" />
        <div className="chevron-container">
          <div className="most-popular-destinations-arou-wrapper">
            <div className="most-popular-destinations">
              The Most popular destinations around the world, from historical places
              to natural wonders.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Navigation4.propTypes = {
  className: PropTypes.string,
};

export default Navigation4;