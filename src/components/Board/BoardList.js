import React from 'react';
import { List, Datagrid, TextField, BooleanField } from 'react-admin';

export const BoardList = props => {
    return <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description"/>
            <BooleanField source="isSaved"/>
        </Datagrid>
    </List>
}