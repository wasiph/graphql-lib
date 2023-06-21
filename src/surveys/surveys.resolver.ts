import { PrismaService } from 'nestjs-prisma';
import { Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Survey } from './models/survey.model';

const pubSub = new PubSub();

@Resolver(() => Survey)
export class SurveysResolver {
  constructor(private prisma: PrismaService) {}

  @Subscription(() => Survey)
  surveyCreated() {
    return pubSub.asyncIterator('surveyCreated');
  }
}
