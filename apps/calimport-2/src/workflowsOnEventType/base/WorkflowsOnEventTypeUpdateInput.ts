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
import { WorkflowWhereUniqueInput } from "../../workflow/base/WorkflowWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { EventTypeWhereUniqueInput } from "../../eventType/base/EventTypeWhereUniqueInput";

@InputType()
class WorkflowsOnEventTypeUpdateInput {
  @ApiProperty({
    required: false,
    type: () => WorkflowWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkflowWhereUniqueInput)
  @IsOptional()
  @Field(() => WorkflowWhereUniqueInput, {
    nullable: true,
  })
  workflow?: WorkflowWhereUniqueInput;

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
  eventType?: EventTypeWhereUniqueInput;
}

export { WorkflowsOnEventTypeUpdateInput as WorkflowsOnEventTypeUpdateInput };
