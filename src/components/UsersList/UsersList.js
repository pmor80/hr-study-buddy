import React from 'react';
import { users } from 'data/users';
import PropTypes from 'prop-types';
import UserListItem from 'components/UserListItem/UserListItem';

const UsersList = (props) => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UserListItem userData={userData} />
        ))}
      </ul>
    </div>
  );
};

UsersList.propTypes = {};

export default UsersList;
