import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, BooleanField, BooleanInput, NumberInput } from 'react-admin';
import {AwaitSelectInput} from "../components/AwaitSelectInput";

export const TestTaskList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="test_task_number" />
            <BooleanField source="is_interactive" />
            <TextField source="checker_id" />
            <TextField source="version" />
            <EditButton basePath="/test_task" />
        </Datagrid>
    </List>
);

export const TestTaskCreate = (props) => (
    <Create title="Create a TestTask" {...props}>
        <SimpleForm>
            <NumberInput source="test_task_number" />
            <BooleanInput source="is_interactive" allowEmpty="false" />
            <NumberInput source="version" />
            <AwaitSelectInput source="checker_id" optionText="name" fetchRel={"checker"} />
            <AwaitSelectInput source="task_id" optionText="id" fetchRel={"task"} />
        </SimpleForm>
    </Create>
);

export const TestTaskEdit = (props) => (
    <Edit title={"Edit TestTask"} {...props}>
        <SimpleForm>
            <NumberInput source="test_task_number" />
            <BooleanInput source="is_interactive" />
            <AwaitSelectInput source="checker_id" optionText="name" fetchRel={"checker"} />
            <AwaitSelectInput source="task_id" optionText="id" fetchRel={"task"} />
            <NumberInput source="version" />
        </SimpleForm>
    </Edit>
);
