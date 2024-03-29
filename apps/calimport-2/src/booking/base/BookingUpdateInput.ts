/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsDate,
  IsEnum,
  IsBoolean,
} from "class-validator";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { EventTypeWhereUniqueInput } from "../../eventType/base/EventTypeWhereUniqueInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumBookingStatus } from "./EnumBookingStatus";
import { DestinationCalendarWhereUniqueInput } from "../../destinationCalendar/base/DestinationCalendarWhereUniqueInput";
import { BookingReferenceUpdateManyWithoutBookingsInput } from "./BookingReferenceUpdateManyWithoutBookingsInput";
import { AttendeeUpdateManyWithoutBookingsInput } from "./AttendeeUpdateManyWithoutBookingsInput";
import { DailyEventReferenceWhereUniqueInput } from "../../dailyEventReference/base/DailyEventReferenceWhereUniqueInput";
import { PaymentUpdateManyWithoutBookingsInput } from "./PaymentUpdateManyWithoutBookingsInput";
import { WorkflowReminderUpdateManyWithoutBookingsInput } from "./WorkflowReminderUpdateManyWithoutBookingsInput";

@InputType()
class BookingUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  uid?: string;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => EventTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => EventTypeWhereUniqueInput, {
    nullable: true,
  })
  eventType?: EventTypeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  customInputs?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startTime?: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endTime?: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumBookingStatus,
  })
  @IsEnum(EnumBookingStatus)
  @IsOptional()
  @Field(() => EnumBookingStatus, {
    nullable: true,
  })
  status?: "CANCELLED" | "ACCEPTED" | "REJECTED" | "PENDING";

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  paid?: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cancellationReason?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  rejectionReason?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dynamicEventSlugRef?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dynamicGroupSlugRef?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  rescheduled?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fromReschedule?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  recurringEventId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  smsReminderNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => DestinationCalendarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DestinationCalendarWhereUniqueInput)
  @IsOptional()
  @Field(() => DestinationCalendarWhereUniqueInput, {
    nullable: true,
  })
  destinationCalendar?: DestinationCalendarWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => BookingReferenceUpdateManyWithoutBookingsInput,
  })
  @ValidateNested()
  @Type(() => BookingReferenceUpdateManyWithoutBookingsInput)
  @IsOptional()
  @Field(() => BookingReferenceUpdateManyWithoutBookingsInput, {
    nullable: true,
  })
  references?: BookingReferenceUpdateManyWithoutBookingsInput;

  @ApiProperty({
    required: false,
    type: () => AttendeeUpdateManyWithoutBookingsInput,
  })
  @ValidateNested()
  @Type(() => AttendeeUpdateManyWithoutBookingsInput)
  @IsOptional()
  @Field(() => AttendeeUpdateManyWithoutBookingsInput, {
    nullable: true,
  })
  attendees?: AttendeeUpdateManyWithoutBookingsInput;

  @ApiProperty({
    required: false,
    type: () => DailyEventReferenceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DailyEventReferenceWhereUniqueInput)
  @IsOptional()
  @Field(() => DailyEventReferenceWhereUniqueInput, {
    nullable: true,
  })
  dailyRef?: DailyEventReferenceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PaymentUpdateManyWithoutBookingsInput,
  })
  @ValidateNested()
  @Type(() => PaymentUpdateManyWithoutBookingsInput)
  @IsOptional()
  @Field(() => PaymentUpdateManyWithoutBookingsInput, {
    nullable: true,
  })
  payment?: PaymentUpdateManyWithoutBookingsInput;

  @ApiProperty({
    required: false,
    type: () => WorkflowReminderUpdateManyWithoutBookingsInput,
  })
  @ValidateNested()
  @Type(() => WorkflowReminderUpdateManyWithoutBookingsInput)
  @IsOptional()
  @Field(() => WorkflowReminderUpdateManyWithoutBookingsInput, {
    nullable: true,
  })
  workflowReminders?: WorkflowReminderUpdateManyWithoutBookingsInput;
}

export { BookingUpdateInput as BookingUpdateInput };
