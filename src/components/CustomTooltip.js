import React from "react";
import PropTypes from "prop-types";

const CustomTooltip = ({ text, description, children }) => {
  return (
    <div className="tooltipContainer">
      {children}
      <div className="tooltip">
        <span className="tooltipText">{text}</span>
        <span className="tooltipDescription">{description}</span>
      </div>
    </div>
  );
};

CustomTooltip.propTypes = {
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default CustomTooltip;
