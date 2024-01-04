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
import { SessionService } from "../session.service";
import { SessionCreateInput } from "./SessionCreateInput";
import { Session } from "./Session";
import { SessionFindManyArgs } from "./SessionFindManyArgs";
import { SessionWhereUniqueInput } from "./SessionWhereUniqueInput";
import { SessionUpdateInput } from "./SessionUpdateInput";

export class SessionControllerBase {
  constructor(protected readonly service: SessionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Session })
  async createSession(
    @common.Body() data: SessionCreateInput
  ): Promise<Session> {
    return await this.service.createSession({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        sessionToken: true,
        expires: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Session] })
  @ApiNestedQuery(SessionFindManyArgs)
  async sessions(@common.Req() request: Request): Promise<Session[]> {
    const args = plainToClass(SessionFindManyArgs, request.query);
    return this.service.sessions({
      ...args,
      select: {
        id: true,
        sessionToken: true,
        expires: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Session })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async session(
    @common.Param() params: SessionWhereUniqueInput
  ): Promise<Session | null> {
    const result = await this.service.session({
      where: params,
      select: {
        id: true,
        sessionToken: true,
        expires: true,

        user: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: Session })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSession(
    @common.Param() params: SessionWhereUniqueInput,
    @common.Body() data: SessionUpdateInput
  ): Promise<Session | null> {
    try {
      return await this.service.updateSession({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          sessionToken: true,
          expires: true,

          user: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: Session })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSession(
    @common.Param() params: SessionWhereUniqueInput
  ): Promise<Session | null> {
    try {
      return await this.service.deleteSession({
        where: params,
        select: {
          id: true,
          sessionToken: true,
          expires: true,

          user: {
            select: {
              id: true,
            },
          },
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
