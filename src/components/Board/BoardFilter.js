import React from 'react';
import { Filter, SelectInput, ReferenceInput } from 'react-admin';
import { userDisplay } from '../../utils/userDisplay';
import { ColorField } from 'react-admin-color-input';

const BoardFilter = (props) => {
  return (
    <Filter {...props}>
      <ReferenceInput source="background" reference="backgrounds">
        <SelectInput optionText={<ColorField source="color" />} />
      </ReferenceInput>

      <ReferenceInput source="userId" reference="user">
        <SelectInput optionText={userDisplay} />
      </ReferenceInput>
    </Filter>
  );
};

export default BoardFilter;
