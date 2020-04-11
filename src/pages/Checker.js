import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, NumberInput } from 'react-admin';

export const CheckerList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <DateField source="deleted_at" />
            <TextField source="name" />
            <TextField source="file_path" />
            <TextField source="version" />
            <EditButton basePath="/checker" />
        </Datagrid>
    </List>
);

export const CheckerCreate = (props) => (
    <Create title="Create a Checker" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="file_path" />
            <NumberInput source="version" />
        </SimpleForm>
    </Create>
);

export const CheckerEdit = (props) => (
    <Edit title={"Edit Checker"} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="file_path" />
            <NumberInput source="version" />
        </SimpleForm>
    </Edit>
);
