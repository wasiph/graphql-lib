import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SurveysService {
  constructor(private prisma: PrismaService) {}
}
