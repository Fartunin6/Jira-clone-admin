import React from 'react';
import { userDisplay } from '../../utils/userDisplay';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  DeleteButton,
  ReferenceField,
  FunctionField,
} from 'react-admin';

const BoardList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <BooleanField source="isSaved" />
        <ReferenceField label="user" source="userId" reference="user">
          <FunctionField render={userDisplay} />
        </ReferenceField>
        <DeleteButton basePath="/board" />
      </Datagrid>
    </List>
  );
};

export default BoardList;
