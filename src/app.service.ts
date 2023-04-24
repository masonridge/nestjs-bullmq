import { Inject, Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { TRANSCODE_QUEUE } from './constants';
import { InjectQueue } from '@nestjs/bull';
import { CreateMissionDto } from './create-mission.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue(TRANSCODE_QUEUE) private readonly transcodeQueue: Queue,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async transcode(body: CreateMissionDto) {
    await this.transcodeQueue.add(body);
  }
}
