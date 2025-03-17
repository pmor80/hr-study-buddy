import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import AverageIcon from 'components/atoms/AverageIcon/AverageIcon';
import { Wrapper } from './UserListItem.styles';

const UserListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    <Wrapper key={`${name}-${average}`}>
      <AverageIcon average={average} />
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <Button />
    </Wrapper>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
