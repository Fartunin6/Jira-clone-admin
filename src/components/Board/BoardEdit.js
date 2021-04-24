import React from 'react';
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from 'react-admin';
import { ColorField } from 'react-admin-color-input';

const BoardEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="description" />

        <ReferenceInput source="background" reference="backgrounds">
          <SelectInput optionText={<ColorField source="color" />} />
        </ReferenceInput>

        <BooleanInput source="isSaved" />
      </SimpleForm>
    </Edit>
  );
};

export default BoardEdit;
