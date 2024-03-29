import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { DestinationCalendarWhereUniqueInput } from "../destinationCalendar/DestinationCalendarWhereUniqueInput";
import { BookingReferenceUpdateManyWithoutBookingsInput } from "./BookingReferenceUpdateManyWithoutBookingsInput";
import { AttendeeUpdateManyWithoutBookingsInput } from "./AttendeeUpdateManyWithoutBookingsInput";
import { DailyEventReferenceWhereUniqueInput } from "../dailyEventReference/DailyEventReferenceWhereUniqueInput";
import { PaymentUpdateManyWithoutBookingsInput } from "./PaymentUpdateManyWithoutBookingsInput";
import { WorkflowReminderUpdateManyWithoutBookingsInput } from "./WorkflowReminderUpdateManyWithoutBookingsInput";

export type BookingUpdateInput = {
  uid?: string;
  user?: UserWhereUniqueInput | null;
  eventType?: EventTypeWhereUniqueInput | null;
  title?: string;
  description?: string | null;
  customInputs?: InputJsonValue;
  startTime?: Date;
  endTime?: Date;
  location?: string | null;
  updatedAt?: Date | null;
  status?: "CANCELLED" | "ACCEPTED" | "REJECTED" | "PENDING";
  paid?: boolean;
  cancellationReason?: string | null;
  rejectionReason?: string | null;
  dynamicEventSlugRef?: string | null;
  dynamicGroupSlugRef?: string | null;
  rescheduled?: boolean | null;
  fromReschedule?: string | null;
  recurringEventId?: string | null;
  smsReminderNumber?: string | null;
  destinationCalendar?: DestinationCalendarWhereUniqueInput | null;
  references?: BookingReferenceUpdateManyWithoutBookingsInput;
  attendees?: AttendeeUpdateManyWithoutBookingsInput;
  dailyRef?: DailyEventReferenceWhereUniqueInput | null;
  payment?: PaymentUpdateManyWithoutBookingsInput;
  workflowReminders?: WorkflowReminderUpdateManyWithoutBookingsInput;
};
