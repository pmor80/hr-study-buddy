import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { theme } from 'assets/styles/theme';
import { StyledButton } from './Button.styles';

function Button(props) {
  return (
    <StyledButton>
      <DeleteIcon />
    </StyledButton>
  );
}

Button.propTypes = {};

export default Button;
