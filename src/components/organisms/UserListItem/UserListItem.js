import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import AverageIcon from 'components/atoms/AverageIcon/AverageIcon';
import { StyledInfo, Wrapper } from './UserListItem.styles';

const showIndex = (index) => alert(`This is student ${index + 1}`);

const UserListItem = ({ deleteUser, index, userData: { name, average, attendance = '0%' } }) => {
  return (
    <Wrapper key={index}>
      <AverageIcon average={average} />
      <StyledInfo>
        <p>
          {name} <DeleteButton onClick={() => deleteUser(name)} />
        </p>
        <p>{attendance}</p>
      </StyledInfo>
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
