import React from 'react';
import { Filter, List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, NumberField, BooleanInput, SelectInput, NumberInput, BooleanField } from 'react-admin';
import {AwaitSelectInput} from "../components/AwaitSelectInput";

const SolutionFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by UUID" source="solution_uuid" alwaysOn />
    </Filter>
);

export const SolutionList = (props) => (
    <List filters={<SolutionFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <DateField source="deleted_at" />
            <TextField source="solution_uuid" />
            <TextField multiline source="source_code" />
            <BooleanField source="is_visible" />
            <TextField source="log_path" />
            <NumberField source="verdict_id" />
            <NumberField source="programming_language_id" />
            <NumberField source="task_id" />
            <EditButton basePath="/solution" />
        </Datagrid>
    </List>
);

export const SolutionCreate = (props) => (
    <Create title="Create a Solution" {...props}>
        <SimpleForm>
            <TextInput source="solution_uuid" />
            <TextInput multiline source="source_code" />
            <BooleanInput source="is_visible" />
            <TextInput source="log_path" />
            <AwaitSelectInput source="task_id" optionText="task_number" countRel={"tasks"} fetchRel={"task"} />
            <AwaitSelectInput source="programming_language_id" optionText="name" countRel={"programming_languages"} fetchRel={"programming_language"} />
            <AwaitSelectInput source="verdict_id" optionText="id" countRel={"verdicts"} fetchRel={"verdict"} />
        </SimpleForm>
    </Create>
);

export const SolutionEdit = (props) => (
    <Edit title={"Edit Solution"} {...props}>
        <SimpleForm>
            <TextInput multiline source="source_code" />
            <BooleanInput source="is_visible" />
            <TextInput source="log_path" />
            <AwaitSelectInput source="task_id" optionText="task_number" countRel={"tasks"} fetchRel={"task"} />
            <AwaitSelectInput source="programming_language_id" optionText="name" countRel={"programming_languages"} fetchRel={"programming_language"} />
            <AwaitSelectInput source="verdict_id" optionText="id" countRel={"verdicts"} fetchRel={"verdict"} />
        </SimpleForm>
    </Edit>
);
