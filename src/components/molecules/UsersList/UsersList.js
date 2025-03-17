import React from 'react';
import { users } from 'data/users';
import PropTypes from 'prop-types';
import UserListItem from 'components/organisms/UserListItem/UserListItem.js';
import { Wrapper, StyledList } from './UsersList.styles';

const UsersList = (props) => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UserListItem userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

UsersList.propTypes = {};

export default UsersList;
