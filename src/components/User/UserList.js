import React from 'react';
import { List, Datagrid, TextField, EmailField, DeleteButton } from 'react-admin';

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <DeleteButton basePath="/user" />
      </Datagrid>
    </List>
  );
};

export default UserList;
