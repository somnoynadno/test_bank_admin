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
    NumberField,
    NumberInput,
    required
} from 'react-admin';
import {AwaitSelectInput} from "../components/AwaitSelectInput";

export const TaskList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <NumberField source="price" />
            <NumberField source="task_number" />
            <NumberField source="config_id" />
            <EditButton basePath="/task" />
        </Datagrid>
    </List>
);

export const TaskCreate = (props) => (
    <Create title="Create a Task" {...props}>
        <SimpleForm>
            <NumberInput source="price" validate={required()} />
            <NumberInput source="task_number" validate={required()} />
            <AwaitSelectInput source="config_id" optionText="id" fetchRel={"config"} validate={required()} />
        </SimpleForm>
    </Create>
);

export const TaskEdit = (props) => (
    <Edit title={"Edit Task"} {...props}>
        <SimpleForm>
            <NumberInput source="price" validate={required()} />
            <NumberInput source="task_number" validate={required()} />
            <AwaitSelectInput source="config_id" optionText="id" fetchRel={"config"} validate={required()} />
        </SimpleForm>
    </Edit>
);
