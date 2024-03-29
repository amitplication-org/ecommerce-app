/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  AppModel, // @ts-ignore
  Credential, // @ts-ignore
  Webhook, // @ts-ignore
  ApiKey,
} from "@prisma/client";

export class AppModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AppModelCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppModelCountArgs>
  ): Promise<number> {
    return this.prisma.appModel.count(args);
  }

  async appModels<T extends Prisma.AppModelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppModelFindManyArgs>
  ): Promise<AppModel[]> {
    return this.prisma.appModel.findMany(args);
  }
  async appModel<T extends Prisma.AppModelFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppModelFindUniqueArgs>
  ): Promise<AppModel | null> {
    return this.prisma.appModel.findUnique(args);
  }
  async createAppModel<T extends Prisma.AppModelCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppModelCreateArgs>
  ): Promise<AppModel> {
    return this.prisma.appModel.create<T>(args);
  }
  async updateAppModel<T extends Prisma.AppModelUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppModelUpdateArgs>
  ): Promise<AppModel> {
    return this.prisma.appModel.update<T>(args);
  }
  async deleteAppModel<T extends Prisma.AppModelDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppModelDeleteArgs>
  ): Promise<AppModel> {
    return this.prisma.appModel.delete(args);
  }

  async findCredentials(
    parentId: string,
    args: Prisma.CredentialFindManyArgs
  ): Promise<Credential[]> {
    return this.prisma.appModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .credentials(args);
  }

  async findWebhook(
    parentId: string,
    args: Prisma.WebhookFindManyArgs
  ): Promise<Webhook[]> {
    return this.prisma.appModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .webhook(args);
  }

  async findApiKey(
    parentId: string,
    args: Prisma.ApiKeyFindManyArgs
  ): Promise<ApiKey[]> {
    return this.prisma.appModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .apiKey(args);
  }
}
