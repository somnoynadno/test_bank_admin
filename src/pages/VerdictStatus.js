import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput } from 'react-admin';

export const VerdictStatusList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="status" />
            <EditButton basePath="/verdict_status" />
        </Datagrid>
    </List>
);

export const VerdictStatusCreate = (props) => (
    <Create title="Create a VerdictStatus" {...props}>
        <SimpleForm>
            <TextInput source="status" />
        </SimpleForm>
    </Create>
);

export const VerdictStatusEdit = (props) => (
    <Edit title={"Edit VerdictStatus"} {...props}>
        <SimpleForm>
            <TextInput source="status" />
        </SimpleForm>
    </Edit>
);
