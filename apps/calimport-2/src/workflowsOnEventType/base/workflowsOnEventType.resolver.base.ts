/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { WorkflowsOnEventType } from "./WorkflowsOnEventType";
import { WorkflowsOnEventTypeCountArgs } from "./WorkflowsOnEventTypeCountArgs";
import { WorkflowsOnEventTypeFindManyArgs } from "./WorkflowsOnEventTypeFindManyArgs";
import { WorkflowsOnEventTypeFindUniqueArgs } from "./WorkflowsOnEventTypeFindUniqueArgs";
import { CreateWorkflowsOnEventTypeArgs } from "./CreateWorkflowsOnEventTypeArgs";
import { UpdateWorkflowsOnEventTypeArgs } from "./UpdateWorkflowsOnEventTypeArgs";
import { DeleteWorkflowsOnEventTypeArgs } from "./DeleteWorkflowsOnEventTypeArgs";
import { Workflow } from "../../workflow/base/Workflow";
import { EventType } from "../../eventType/base/EventType";
import { WorkflowsOnEventTypeService } from "../workflowsOnEventType.service";
@graphql.Resolver(() => WorkflowsOnEventType)
export class WorkflowsOnEventTypeResolverBase {
  constructor(protected readonly service: WorkflowsOnEventTypeService) {}

  async _workflowsOnEventTypesMeta(
    @graphql.Args() args: WorkflowsOnEventTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [WorkflowsOnEventType])
  async workflowsOnEventTypes(
    @graphql.Args() args: WorkflowsOnEventTypeFindManyArgs
  ): Promise<WorkflowsOnEventType[]> {
    return this.service.workflowsOnEventTypes(args);
  }

  @graphql.Query(() => WorkflowsOnEventType, { nullable: true })
  async workflowsOnEventType(
    @graphql.Args() args: WorkflowsOnEventTypeFindUniqueArgs
  ): Promise<WorkflowsOnEventType | null> {
    const result = await this.service.workflowsOnEventType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => WorkflowsOnEventType)
  async createWorkflowsOnEventType(
    @graphql.Args() args: CreateWorkflowsOnEventTypeArgs
  ): Promise<WorkflowsOnEventType> {
    return await this.service.createWorkflowsOnEventType({
      ...args,
      data: {
        ...args.data,

        workflow: {
          connect: args.data.workflow,
        },

        eventType: {
          connect: args.data.eventType,
        },
      },
    });
  }

  @graphql.Mutation(() => WorkflowsOnEventType)
  async updateWorkflowsOnEventType(
    @graphql.Args() args: UpdateWorkflowsOnEventTypeArgs
  ): Promise<WorkflowsOnEventType | null> {
    try {
      return await this.service.updateWorkflowsOnEventType({
        ...args,
        data: {
          ...args.data,

          workflow: {
            connect: args.data.workflow,
          },

          eventType: {
            connect: args.data.eventType,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => WorkflowsOnEventType)
  async deleteWorkflowsOnEventType(
    @graphql.Args() args: DeleteWorkflowsOnEventTypeArgs
  ): Promise<WorkflowsOnEventType | null> {
    try {
      return await this.service.deleteWorkflowsOnEventType(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Workflow, {
    nullable: true,
    name: "workflow",
  })
  async getWorkflow(
    @graphql.Parent() parent: WorkflowsOnEventType
  ): Promise<Workflow | null> {
    const result = await this.service.getWorkflow(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => EventType, {
    nullable: true,
    name: "eventType",
  })
  async getEventType(
    @graphql.Parent() parent: WorkflowsOnEventType
  ): Promise<EventType | null> {
    const result = await this.service.getEventType(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
