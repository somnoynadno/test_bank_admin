import React from 'react';
import {
    List,
    Datagrid,
    Edit,
    Create,
    SimpleForm,
    DateField,
    TextField,
    EditButton,
    TextInput,
    required
} from 'react-admin';

export const ProgrammingLanguageList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="name" />
            <TextField source="version" />
            <EditButton basePath="/programming_language" />
        </Datagrid>
    </List>
);

export const ProgrammingLanguageCreate = (props) => (
    <Create title="Create a ProgrammingLanguage" {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <TextInput source="version" validate={required()} />
        </SimpleForm>
    </Create>
);

export const ProgrammingLanguageEdit = (props) => (
    <Edit title={"Edit ProgrammingLanguage"} {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <TextInput source="version" validate={required()} />
        </SimpleForm>
    </Edit>
);
