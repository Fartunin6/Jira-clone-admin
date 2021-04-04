import React from 'react';
import { Create, SimpleForm, TextInput, SelectInput } from 'react-admin';
import { BOARD_BACKGROUNDS } from '../../constants/board-backgrounds';

const BoardCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="description" />
        <SelectInput source="background" choices={BOARD_BACKGROUNDS}></SelectInput>
      </SimpleForm>
    </Create>
  );
};

export default BoardCreate;
