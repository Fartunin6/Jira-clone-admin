import React from 'react';
import { List, Datagrid, TextField, BooleanField, DeleteButton, ReferenceField } from 'react-admin';

const BoardList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <BooleanField source="isSaved" />
        <ReferenceField label="user" source="userId" reference="user">
          <TextField source={'name'} />
        </ReferenceField>
        <DeleteButton basePath="/board" />
      </Datagrid>
    </List>
  );
};

export default BoardList;
