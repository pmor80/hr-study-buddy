import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UserListItem from 'components/organisms/UserListItem/UserListItem.js';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';

const UsersList = (props) => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <StyledTitle>Students list</StyledTitle>
      <StyledList>
        {users.map((userData, i) => (
          <UserListItem deleteUser={deleteUser} index={i} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
