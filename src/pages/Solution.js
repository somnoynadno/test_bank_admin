import React from 'react';
import {
    Show,
    ShowButton,
    SimpleShowLayout,
    Filter,
    List,
    Datagrid,
    Edit,
    Create,
    SimpleForm,
    DateField,
    TextField,
    TextInput,
    NumberField,
    BooleanInput,
    BooleanField,
    EditButton,
    required
} from 'react-admin';
import {AwaitSelectInput} from "../components/AwaitSelectInput";

const SolutionFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by UUID" source="solution_uuid" alwaysOn />
    </Filter>
);

export const SolutionShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <DateField source="created_at" />
            <NumberField source="task_id" />
            <TextField multiline source="source_code" />
            <BooleanField source="is_visible" />
            <TextField source="log_path" />
            <NumberField source="verdict_id" />
            <NumberField source="programming_language_id" />
        </SimpleShowLayout>
    </Show>
);

export const SolutionList = (props) => (
    <List filters={<SolutionFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <NumberField source="task_id" />
            <TextField source="solution_uuid" />
            <BooleanField source="is_visible" />
            <ShowButton basePath="/solution" />
            <EditButton basePath="/solution" />
        </Datagrid>
    </List>
);

export const SolutionCreate = (props) => (
    <Create title="Create a Solution" {...props}>
        <SimpleForm>
            <TextInput source="solution_uuid" validate={required()} />
            <TextInput multiline source="source_code" validate={required()} />
            <BooleanInput source="is_visible" defaultValue={true} validate={required()} />
            <TextInput source="log_path" />
            <AwaitSelectInput source="task_id" optionText="task_number" fetchRel={"task"} validate={required()} />
            <AwaitSelectInput source="programming_language_id" optionText="name" fetchRel={"programming_language"} validate={required()}/>
            <AwaitSelectInput source="verdict_id" optionText="id" fetchRel={"verdict"} validate={required()} />
        </SimpleForm>
    </Create>
);

export const SolutionEdit = (props) => (
    <Edit title={"Edit Solution"} {...props}>
        <SimpleForm>
            <TextInput multiline source="source_code" validate={required()} />
            <BooleanInput source="is_visible" validate={required()} />
            <TextInput source="log_path" />
            <AwaitSelectInput source="task_id" optionText="task_number" fetchRel={"task"} validate={required()} />
            <AwaitSelectInput source="programming_language_id" optionText="name" fetchRel={"programming_language"} validate={required()} />
            <AwaitSelectInput source="verdict_id" optionText="id" fetchRel={"verdict"} validate={required()} />
        </SimpleForm>
    </Edit>
);
