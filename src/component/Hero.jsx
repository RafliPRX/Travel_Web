import PropTypes from 'prop-types';
import "./hero.css";

const Hero = ({ className = "" }) => {  
  return (
    <section className={`hero ${className}`}>
      <div className="the-best-travel-for-your-joune-parent">
        <h3 className="the-best-travel">
          The best travel for your journey begins now
        </h3>
        <div className="Begining-intro">
          <h1 className="start-your-unforgettable-container2">
            <p className="start-your-unforgettable2">{`Start your unforgettable `}</p>
            <p className="journey-with-us2">journey with us.</p>
          </h1>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;