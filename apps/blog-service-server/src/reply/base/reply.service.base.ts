/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Reply as PrismaReply } from "@prisma/client";

export class ReplyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ReplyCountArgs, "select">): Promise<number> {
    return this.prisma.reply.count(args);
  }

  async replies<T extends Prisma.ReplyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReplyFindManyArgs>
  ): Promise<PrismaReply[]> {
    return this.prisma.reply.findMany<Prisma.ReplyFindManyArgs>(args);
  }
  async reply<T extends Prisma.ReplyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReplyFindUniqueArgs>
  ): Promise<PrismaReply | null> {
    return this.prisma.reply.findUnique(args);
  }
  async createReply<T extends Prisma.ReplyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReplyCreateArgs>
  ): Promise<PrismaReply> {
    return this.prisma.reply.create<T>(args);
  }
  async updateReply<T extends Prisma.ReplyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReplyUpdateArgs>
  ): Promise<PrismaReply> {
    return this.prisma.reply.update<T>(args);
  }
  async deleteReply<T extends Prisma.ReplyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReplyDeleteArgs>
  ): Promise<PrismaReply> {
    return this.prisma.reply.delete(args);
  }
}
