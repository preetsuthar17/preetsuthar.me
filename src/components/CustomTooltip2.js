import React from "react";
import PropTypes from "prop-types";

const CustomTooltip2 = ({ text, children }) => {
  return (
    <div className="tooltipContainer">
      {children}
      <div className="tooltip">
        <span className="tooltipText">{text}</span>
      </div>
    </div>
  );
};

CustomTooltip2.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default CustomTooltip2;
