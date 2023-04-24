import { TRANSCODE_QUEUE } from './constants';
import { Processor, Process } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor(TRANSCODE_QUEUE)
export class TranscodeConsumer {
  private readonly logger = new Logger(TranscodeConsumer.name);
  @Process()
  async transcode(job: Job<unknown>) {
    this.logger.log(`Transcoding started for job  ${job.id}`);
    this.logger.log(JSON.stringify(job.data));
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 8000));
    this.logger.log(`Transcoding COMPLETE for job  ${job.id}`);
  }
}
