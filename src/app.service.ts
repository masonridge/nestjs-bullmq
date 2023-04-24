import { Inject, Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { SORTENGINE_QUEUE } from './constants';
import { InjectQueue } from '@nestjs/bull';
import { CreateMissionDto } from './create-mission.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue(SORTENGINE_QUEUE) private readonly sortengineQueue: Queue,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async transcode(body: CreateMissionDto) {
    await this.sortengineQueue.add(body);
  }
}
