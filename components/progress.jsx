import React from "react";
import PropTypes from "prop-types";

const Progress = ({ percentage }) => {
  return (
    <div className='progress'>
      <div
        className='progress-bar bg-success'
        role='progressbar'
        style={{ width: `${percentage}%` }}
        aria-valuenow={`${percentage}`}
        aria-valuemin='0'
        aria-valuemax='100'
      >
        {percentage}%
      </div>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Progress;
