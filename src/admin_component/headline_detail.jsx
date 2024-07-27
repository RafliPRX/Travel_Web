import PropTypes from "prop-types";
import "./headline.css";

const Headline_detail = ({ className = "", image, Nama }) => {
    return (
      <section className={`Header2 ${className}`}>
        <img className="image-icon" loading="lazy" alt="" src={image} />
        <div className="text-column">
          <div className="headline-supporting-text">
            <a className="headline">{Nama}</a>
            <div className="published-date">Published date</div>
            <div className="supporting-text">
              <p className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</p>
              <p className="duis-aute-irure">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  Headline_detail.propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
    Nama: PropTypes.string
  };
  
  export default Headline_detail;