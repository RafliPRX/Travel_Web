import { useMemo } from "react";
import PropTypes from "prop-types";
import "./input.css";

const Input = ({ className = "", insideIconContainer, propMarginTop }) => {
  const inputStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div className={`input3 ${className}`} style={inputStyle}>
      <div className="base2">
        <a className="label2">Label</a>
        <div className="input-icon2">
          <div className="input4">
            <div className="input-value2">
              <div className="input-text2">Input</div>
              <div className="cursor2">
                <div className="div2" />
              </div>
            </div>
            <img
              className="inside-icon-container2"
              alt=""
              src={insideIconContainer}
            />
          </div>
          <img
            className="outside-icon-container2"
            alt=""
            src="/outside-icon-container@2x.png"
          />
        </div>
        <div className="hint-error2">Hint or Error Message</div>
      </div>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  insideIconContainer: PropTypes.string,

  /** Style props */
  propMarginTop: PropTypes.any,
};

export default Input;