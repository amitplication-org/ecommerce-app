/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, ValidateNested, IsString, IsOptional } from "class-validator";
import { User } from "../../user/base/User";
import { Type } from "class-transformer";
import { EventType } from "../../eventType/base/EventType";
import { Availability } from "../../availability/base/Availability";

@ObjectType()
class Schedule {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  timeZone!: string | null;

  @ApiProperty({
    required: false,
    type: () => [EventType],
  })
  @ValidateNested()
  @Type(() => EventType)
  @IsOptional()
  eventType?: Array<EventType>;

  @ApiProperty({
    required: false,
    type: () => [Availability],
  })
  @ValidateNested()
  @Type(() => Availability)
  @IsOptional()
  availability?: Array<Availability>;
}

export { Schedule as Schedule };
