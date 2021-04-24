import React from 'react';
import { Create, SimpleForm, TextInput, SelectInput, ReferenceInput } from 'react-admin';
import { userDisplay } from '../../utils/userDisplay';
import { ColorField } from 'react-admin-color-input';

const BoardCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="description" />

        <ReferenceInput source="background" reference="backgrounds">
          <SelectInput optionText={<ColorField source="color" />} />
        </ReferenceInput>

        <ReferenceInput source="userId" reference="user">
          <SelectInput optionText={userDisplay} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default BoardCreate;
