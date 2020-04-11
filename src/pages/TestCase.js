import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, NumberField, BooleanInput, SelectInput, NumberInput } from 'react-admin';
import {AwaitSelectInput} from "../components/AwaitSelectInput";

export const TestCaseList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <DateField source="deleted_at" />
            <TextField multiline source="input" />
            <TextField multiline source="output" />
            <NumberField source="number" />
            <NumberField source="test_type_id" />
            <EditButton basePath="/test_case" />
        </Datagrid>
    </List>
);

export const TestCaseCreate = (props) => (
    <Create title="Create a TestCase" {...props}>
        <SimpleForm>
            <NumberInput source="number" />
            <TextInput multiline source="input" />
            <TextInput multiline source="output" />
            <AwaitSelectInput source="test_type_id" optionText="type" countRel={"test_types"} fetchRel={"test_type"}/>
            <AwaitSelectInput source="test_task_id" optionText="test_task_number" countRel={"test_tasks"} fetchRel={"test_task"}/>
        </SimpleForm>
    </Create>
);

export const TestCaseEdit = (props) => (
    <Edit title={"Edit TestCase"} {...props}>
        <SimpleForm>
            <NumberInput source="number" />
            <TextInput multiline source="input" />
            <TextInput multiline source="output" />
            <AwaitSelectInput source="test_type_id" optionText="type" countRel={"test_types"} fetchRel={"test_type"}/>
            <AwaitSelectInput source="test_task_id" optionText="test_task_number" countRel={"test_tasks"} fetchRel={"test_task"}/>
        </SimpleForm>
    </Edit>
);
