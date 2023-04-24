import { SORTENGINE_QUEUE } from './constants';
import { Processor, Process } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor(SORTENGINE_QUEUE)
export class SortEngineConsumer {
  private readonly logger = new Logger(SortEngineConsumer.name);
  @Process()
  async processmission(job: Job<unknown>) {
    this.logger.log(`SortEngine started for job  ${job.id}`);
    this.logger.log(JSON.stringify(job.data));
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 5000));
    this.logger.log(`SortEngine COMPLETED  job  ${job.id}`);
  }
}
