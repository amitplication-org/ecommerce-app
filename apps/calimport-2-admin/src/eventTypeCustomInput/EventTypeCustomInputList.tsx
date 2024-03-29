import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";

export const EventTypeCustomInputList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EventTypeCustomInputs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Event Type"
          source="eventtype.id"
          reference="EventType"
        >
          <TextField source={EVENTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Label" source="label" />
        <TextField label="Type" source="type" />
        <BooleanField label="Required" source="required" />
        <TextField label="Placeholder" source="placeholder" />
      </Datagrid>
    </List>
  );
};
