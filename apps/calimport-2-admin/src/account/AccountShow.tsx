import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Provider" source="provider" />
        <TextField label="Provider Account Id" source="providerAccountId" />
        <TextField label="Refresh Token" source="refreshToken" />
        <TextField label="Access Token" source="accessToken" />
        <TextField label="Expires At" source="expiresAt" />
        <TextField label="Token Type" source="tokenType" />
        <TextField label="Scope" source="scope" />
        <TextField label="Id Token" source="idToken" />
        <TextField label="Session State" source="sessionState" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
