import React from 'react';
import { List, Datagrid, TextField, BooleanField, DeleteButton } from 'react-admin';

const BoardList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <BooleanField source="isSaved" />
        <DeleteButton basePath="/board" />
      </Datagrid>
    </List>
  );
};

export default BoardList;
