import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, BooleanField, BooleanInput, SelectInput, NumberInput } from 'react-admin';


export const TestTypeList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <DateField source="deleted_at" />
            <TextField source="type" />
            <EditButton basePath="/test_type" />
        </Datagrid>
    </List>
);

export const TestTypeCreate = (props) => (
    <Create title="Create a TestType" {...props}>
        <SimpleForm>
            <TextInput source="type" />
        </SimpleForm>
    </Create>
);

export const TestTypeEdit = (props) => (
    <Edit title={"Edit TestType"} {...props}>
        <SimpleForm>
            <TextInput source="type" />
        </SimpleForm>
    </Edit>
);
