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
    NumberInput,
    required
} from 'react-admin';
import {AwaitSelectInput} from "../components/AwaitSelectInput";

export const VerdictList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="failed_test" />
            <TextField source="compilation_log" />
            <TextField source="results" />
            <TextField source="verdict_status_id" />
            <EditButton basePath="/verdict" />
        </Datagrid>
    </List>
);

export const VerdictCreate = (props) => (
    <Create title="Create a Verdict" {...props}>
        <SimpleForm>
            <NumberInput source="failed_test" />
            <TextInput source="compilation_log" />
            <TextInput source="results" />
            <AwaitSelectInput source="verdict_status_id" optionText="status" fetchRel={"verdict_status"} validate={required()} />
        </SimpleForm>
    </Create>
);

export const VerdictEdit = (props) => (
    <Edit title={"Edit Verdict"} {...props}>
        <SimpleForm>
            <NumberInput source="failed_test" />
            <TextInput source="compilation_log" />
            <TextInput source="results" />
            <AwaitSelectInput source="verdict_status_id" optionText="status" fetchRel={"verdict_status"} validate={required()} />
        </SimpleForm>
    </Edit>
);
