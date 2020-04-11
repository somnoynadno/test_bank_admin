import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, BooleanField, NumberInput, BooleanInput, NumberField } from 'react-admin';

export const ConfigList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <DateField source="deleted_at" />
            <NumberField source="time_limit" />
            <NumberField source="memory_limit" />
            <BooleanField source="is_default" />
            <NumberField source="tests_count" />
            <NumberField source="run_all_tests" />
            <NumberField source="max_parallel_tests" />
            <EditButton basePath="/config" />
        </Datagrid>
    </List>
);

export const ConfigCreate = (props) => (
    <Create title="Create a Config" {...props}>
        <SimpleForm>
            <NumberInput source="time_limit" />
            <NumberInput source="memory_limit" />
            <BooleanInput source="is_default" />
            <NumberInput source="tests_count" />
            <NumberInput source="run_all_tests" />
            <NumberInput source="max_parallel_tests" />
        </SimpleForm>
    </Create>
);

export const ConfigEdit = (props) => (
    <Edit title={"Edit Config"} {...props}>
        <SimpleForm>
            <NumberInput source="time_limit" />
            <NumberInput source="memory_limit" />
            <BooleanInput source="is_default" />
            <NumberInput source="tests_count" />
            <NumberInput source="run_all_tests" />
            <NumberInput source="max_parallel_tests" />
        </SimpleForm>
    </Edit>
);
