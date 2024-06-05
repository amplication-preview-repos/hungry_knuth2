import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ColumnTitle } from "../column/ColumnTitle";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="assignedTo" source="assignedTo" />
        <TextInput label="assignedUser" source="assignedUser" />
        <ReferenceInput source="column.id" reference="Column" label="Column">
          <SelectInput optionText={ColumnTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="relatedColumn" source="relatedColumn" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="taskDescription" multiline source="taskDescription" />
        <SelectInput
          source="taskStatus"
          label="taskStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="taskTitle" source="taskTitle" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
