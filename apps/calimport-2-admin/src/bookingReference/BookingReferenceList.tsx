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
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";

export const BookingReferenceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BookingReferences"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Uid" source="uid" />
        <TextField label="Meeting Id" source="meetingId" />
        <TextField label="Meeting Password" source="meetingPassword" />
        <TextField label="Meeting Url" source="meetingUrl" />
        <ReferenceField label="Booking" source="booking.id" reference="Booking">
          <TextField source={BOOKING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="External Calendar Id" source="externalCalendarId" />
        <BooleanField label="Deleted" source="deleted" />
      </Datagrid>
    </List>
  );
};
