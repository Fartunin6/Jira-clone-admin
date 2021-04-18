import React from 'react';
import { List, Datagrid, TextField, DeleteButton } from 'react-admin';
import { ColorField } from 'react-admin-color-input';

const BoardBackgroundList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <ColorField source="color" />
        <DeleteButton basePath="/backgrounds" />
      </Datagrid>
    </List>
  );
};

export default BoardBackgroundList;
