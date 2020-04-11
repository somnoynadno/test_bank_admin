import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, NumberField, BooleanInput, SelectInput, NumberInput } from 'react-admin';
import {AwaitSelectInput} from "../components/AwaitSelectInput";

export const BaseTaskList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <DateField source="deleted_at" />
            <NumberField source="task_id" />
            <NumberField source="test_task_id" />
            <EditButton basePath="/base_task" />
        </Datagrid>
    </List>
);

export const BaseTaskCreate = (props) => (
    <Create title="Create a BaseTask" {...props}>
        <SimpleForm>
            <AwaitSelectInput source="task_id" optionText="task_number" countRel={"tasks"} fetchRel={"task"} />
            <AwaitSelectInput source="test_task_id" optionText="test_task_number" countRel={"test_tasks"} fetchRel={"test_task"} />
        </SimpleForm>
    </Create>
);

export const BaseTaskEdit = (props) => (
    <Edit title={"Edit BaseTask"} {...props}>
        <SimpleForm>
            <AwaitSelectInput source="task_id" optionText="task_number" countRel={"tasks"} fetchRel={"task"} />
            <AwaitSelectInput source="test_task_id" optionText="test_task_number" countRel={"test_tasks"} fetchRel={"test_task"} />
        </SimpleForm>
    </Edit>
);
