import React from 'react';
import { Create, SimpleForm } from 'react-admin';
import { ColorInput } from 'react-admin-color-input';

const BoardCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ColorInput source="color" />
      </SimpleForm>
    </Create>
  );
};

export default BoardCreate;
