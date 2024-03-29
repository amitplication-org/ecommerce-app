/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EventTypeCustomInputService } from "../eventTypeCustomInput.service";
import { EventTypeCustomInputCreateInput } from "./EventTypeCustomInputCreateInput";
import { EventTypeCustomInput } from "./EventTypeCustomInput";
import { EventTypeCustomInputFindManyArgs } from "./EventTypeCustomInputFindManyArgs";
import { EventTypeCustomInputWhereUniqueInput } from "./EventTypeCustomInputWhereUniqueInput";
import { EventTypeCustomInputUpdateInput } from "./EventTypeCustomInputUpdateInput";

export class EventTypeCustomInputControllerBase {
  constructor(protected readonly service: EventTypeCustomInputService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EventTypeCustomInput })
  async createEventTypeCustomInput(
    @common.Body() data: EventTypeCustomInputCreateInput
  ): Promise<EventTypeCustomInput> {
    return await this.service.createEventTypeCustomInput({
      data: {
        ...data,

        eventType: {
          connect: data.eventType,
        },
      },
      select: {
        id: true,

        eventType: {
          select: {
            id: true,
          },
        },

        label: true,
        type: true,
        required: true,
        placeholder: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EventTypeCustomInput] })
  @ApiNestedQuery(EventTypeCustomInputFindManyArgs)
  async eventTypeCustomInputs(
    @common.Req() request: Request
  ): Promise<EventTypeCustomInput[]> {
    const args = plainToClass(EventTypeCustomInputFindManyArgs, request.query);
    return this.service.eventTypeCustomInputs({
      ...args,
      select: {
        id: true,

        eventType: {
          select: {
            id: true,
          },
        },

        label: true,
        type: true,
        required: true,
        placeholder: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EventTypeCustomInput })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async eventTypeCustomInput(
    @common.Param() params: EventTypeCustomInputWhereUniqueInput
  ): Promise<EventTypeCustomInput | null> {
    const result = await this.service.eventTypeCustomInput({
      where: params,
      select: {
        id: true,

        eventType: {
          select: {
            id: true,
          },
        },

        label: true,
        type: true,
        required: true,
        placeholder: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EventTypeCustomInput })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEventTypeCustomInput(
    @common.Param() params: EventTypeCustomInputWhereUniqueInput,
    @common.Body() data: EventTypeCustomInputUpdateInput
  ): Promise<EventTypeCustomInput | null> {
    try {
      return await this.service.updateEventTypeCustomInput({
        where: params,
        data: {
          ...data,

          eventType: {
            connect: data.eventType,
          },
        },
        select: {
          id: true,

          eventType: {
            select: {
              id: true,
            },
          },

          label: true,
          type: true,
          required: true,
          placeholder: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EventTypeCustomInput })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEventTypeCustomInput(
    @common.Param() params: EventTypeCustomInputWhereUniqueInput
  ): Promise<EventTypeCustomInput | null> {
    try {
      return await this.service.deleteEventTypeCustomInput({
        where: params,
        select: {
          id: true,

          eventType: {
            select: {
              id: true,
            },
          },

          label: true,
          type: true,
          required: true,
          placeholder: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
