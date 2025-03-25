import React from 'react';
import PropTypes from 'prop-types';
import { StyledAverageIcon } from './AverageIcon.styles';

const AverageIcon = ({ average }) => {
  return <StyledAverageIcon value={average}>{average}</StyledAverageIcon>;
};

AverageIcon.propTypes = {
  average: PropTypes.string.isRequired,
};

export default AverageIcon;
