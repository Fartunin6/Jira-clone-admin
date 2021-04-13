import React from 'react';
import { Create, SimpleForm, TextInput, SelectInput, ReferenceInput } from 'react-admin';
import { BOARD_BACKGROUNDS } from '../../constants/board-backgrounds';
import { userDisplay } from '../../utils/userDisplay';

const BoardCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="description" />
        <SelectInput source="background" choices={BOARD_BACKGROUNDS}></SelectInput>
        <ReferenceInput source="userId" reference="user">
          <SelectInput optionText={userDisplay} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default BoardCreate;
