import React from 'react';
import { Create, SimpleForm, TextInput, SelectInput, ReferenceInput } from 'react-admin';
import { BOARD_BACKGROUNDS } from '../../constants/board-backgrounds';

const userSelectOption = (user) => `${user.name} (${user.email})`;

const BoardCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="description" />
        <SelectInput source="background" choices={BOARD_BACKGROUNDS}></SelectInput>
        <ReferenceInput source={'userId'} reference="user">
          <SelectInput optionText={userSelectOption} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default BoardCreate;
