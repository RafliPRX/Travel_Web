import PropTypes from "prop-types";
import "./card.css";

const Card = ({ className = "", image, date, title }) => {
  return (
    <div className={`Card-01 ${className}`}>
      <img className="Image-icon" loading="lazy" alt="" src={image} />
      <div className="Content">
        <div className="title">{title}</div>
        <div className="date">{date}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string
};

export default Card;