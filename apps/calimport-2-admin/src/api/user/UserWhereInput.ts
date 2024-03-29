import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { EventTypeListRelationFilter } from "../eventType/EventTypeListRelationFilter";
import { CredentialListRelationFilter } from "../credential/CredentialListRelationFilter";
import { DestinationCalendarWhereUniqueInput } from "../destinationCalendar/DestinationCalendarWhereUniqueInput";
import { MembershipListRelationFilter } from "../membership/MembershipListRelationFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";
import { AvailabilityListRelationFilter } from "../availability/AvailabilityListRelationFilter";
import { SelectedCalendarListRelationFilter } from "../selectedCalendar/SelectedCalendarListRelationFilter";
import { WebhookListRelationFilter } from "../webhook/WebhookListRelationFilter";
import { ImpersonationListRelationFilter } from "../impersonation/ImpersonationListRelationFilter";
import { ApiKeyListRelationFilter } from "../apiKey/ApiKeyListRelationFilter";
import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { WorkflowListRelationFilter } from "../workflow/WorkflowListRelationFilter";

export type UserWhereInput = {
  id?: IntFilter;
  username?: StringNullableFilter;
  name?: StringNullableFilter;
  email?: StringFilter;
  emailVerified?: DateTimeNullableFilter;
  password?: StringNullableFilter;
  bio?: StringNullableFilter;
  avatar?: StringNullableFilter;
  timeZone?: StringFilter;
  weekStart?: StringFilter;
  startTime?: IntFilter;
  endTime?: IntFilter;
  bufferTime?: IntFilter;
  hideBranding?: BooleanFilter;
  theme?: StringNullableFilter;
  createdDate?: DateTimeFilter;
  trialEndsAt?: DateTimeNullableFilter;
  defaultScheduleId?: IntNullableFilter;
  completedOnboarding?: BooleanFilter;
  locale?: StringNullableFilter;
  timeFormat?: IntNullableFilter;
  twoFactorSecret?: StringNullableFilter;
  twoFactorEnabled?: BooleanFilter;
  identityProvider?: "CAL" | "GOOGLE" | "SAML";
  identityProviderId?: StringNullableFilter;
  invitedTo?: IntNullableFilter;
  plan?: "FREE" | "TRIAL" | "PRO";
  brandColor?: StringFilter;
  darkBrandColor?: StringFilter;
  away?: BooleanFilter;
  allowDynamicBooking?: BooleanNullableFilter;
  metadata?: JsonFilter;
  verified?: BooleanNullableFilter;
  role?: "USER" | "ADMIN";
  disableImpersonation?: BooleanFilter;
  eventTypes?: EventTypeListRelationFilter;
  credentials?: CredentialListRelationFilter;
  destinationCalendar?: DestinationCalendarWhereUniqueInput;
  teams?: MembershipListRelationFilter;
  bookings?: BookingListRelationFilter;
  schedules?: ScheduleListRelationFilter;
  availability?: AvailabilityListRelationFilter;
  selectedCalendars?: SelectedCalendarListRelationFilter;
  webhooks?: WebhookListRelationFilter;
  impersonatedUsers?: ImpersonationListRelationFilter;
  impersonatedBy?: ImpersonationListRelationFilter;
  apiKeys?: ApiKeyListRelationFilter;
  accounts?: AccountListRelationFilter;
  sessions?: SessionListRelationFilter;
  feedback?: FeedbackListRelationFilter;
  workflows?: WorkflowListRelationFilter;
};
