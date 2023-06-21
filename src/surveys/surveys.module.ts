import { Module } from '@nestjs/common';
import { SurveysResolver } from './surveys.resolver';

@Module({
  imports: [],
  providers: [SurveysResolver],
})
export class SurveysModule {}
