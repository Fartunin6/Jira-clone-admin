import React from 'react';
import BoardFilter from './BoardFilter';
import { userDisplay } from '../../utils/userDisplay';
import { ColorField } from 'react-admin-color-input';
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
    <List filters={<BoardFilter />} {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <BooleanField source="isSaved" />

        <ReferenceField label="User" source="userId" reference="user">
          <FunctionField render={userDisplay} />
        </ReferenceField>

        <ReferenceField label="Background" source="background" reference="backgrounds">
          <ColorField source="color" />
        </ReferenceField>

        <DeleteButton basePath="/board" />
      </Datagrid>
    </List>
  );
};

export default BoardList;
