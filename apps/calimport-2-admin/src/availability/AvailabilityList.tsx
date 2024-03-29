import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";

export const AvailabilityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Availabilities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Event Type"
          source="eventtype.id"
          reference="EventType"
        >
          <TextField source={EVENTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Days" source="days" />
        <TextField label="Start Time" source="startTime" />
        <TextField label="End Time" source="endTime" />
        <TextField label="Date" source="date" />
        <ReferenceField
          label="Schedule"
          source="schedule.id"
          reference="Schedule"
        >
          <TextField source={SCHEDULE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
