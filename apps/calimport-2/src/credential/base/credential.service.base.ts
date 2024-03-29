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
  Credential, // @ts-ignore
  DestinationCalendar, // @ts-ignore
  User, // @ts-ignore
  AppModel,
} from "@prisma/client";

export class CredentialServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CredentialCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CredentialCountArgs>
  ): Promise<number> {
    return this.prisma.credential.count(args);
  }

  async credentials<T extends Prisma.CredentialFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CredentialFindManyArgs>
  ): Promise<Credential[]> {
    return this.prisma.credential.findMany(args);
  }
  async credential<T extends Prisma.CredentialFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CredentialFindUniqueArgs>
  ): Promise<Credential | null> {
    return this.prisma.credential.findUnique(args);
  }
  async createCredential<T extends Prisma.CredentialCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CredentialCreateArgs>
  ): Promise<Credential> {
    return this.prisma.credential.create<T>(args);
  }
  async updateCredential<T extends Prisma.CredentialUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CredentialUpdateArgs>
  ): Promise<Credential> {
    return this.prisma.credential.update<T>(args);
  }
  async deleteCredential<T extends Prisma.CredentialDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CredentialDeleteArgs>
  ): Promise<Credential> {
    return this.prisma.credential.delete(args);
  }

  async findDestinationCalendars(
    parentId: number,
    args: Prisma.DestinationCalendarFindManyArgs
  ): Promise<DestinationCalendar[]> {
    return this.prisma.credential
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .destinationCalendars(args);
  }

  async getUser(parentId: number): Promise<User | null> {
    return this.prisma.credential
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }

  async getAppField(parentId: number): Promise<AppModel | null> {
    return this.prisma.credential
      .findUnique({
        where: { id: parentId },
      })
      .appField();
  }
}
