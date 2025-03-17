import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export const StyledAverageIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme, average }) => (average >= 3.2 ? theme.colors.success : average >= 1.6 ? theme.colors.warning : theme.colors.error)};
  border-radius: 50px;
  border: none;
  border: 1px solid red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AverageIcon = ({ average }) => {
  return <StyledAverageIcon average={average}>{average}</StyledAverageIcon>;
};

AverageIcon.propTypes = {
  average: PropTypes.string.isRequired,
};

export default AverageIcon;
