import { useMemo } from "react";
import PropTypes from "prop-types";
import "./col-block.css";

const ColBlock = ({
  className = "",
  monumentOfBerlin,
  location1,
  berlinGermany,
  propBackgroundImage,
  price,
  code,
}) => {
  const colBlockStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={`col-block ${className}`} style={colBlockStyle}>
      <div className="text-block">
        <div className="monument-of-berlin">{code}</div>
        <div className="monument-of-berlin">{monumentOfBerlin}</div>
        <img
            className="location-1-icon"
            loading="lazy"
            alt=""
            src={location1}
          />
        
        <div className="location">
          <div className="berlin-germany">{berlinGermany}</div>
          <div className="berlin-germany">{price}</div>
        </div>
      </div>
    </div>
  );
};

ColBlock.propTypes = {
  className: PropTypes.string,
  monumentOfBerlin: PropTypes.string,
  location1: PropTypes.string,
  berlinGermany: PropTypes.string,
  price: PropTypes.string,
  code: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default ColBlock;