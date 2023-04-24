import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateMissionDto } from './create-mission.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('transcode')
  async transcode(@Body() body: CreateMissionDto) {
    return this.appService.transcode(body);
  }
}
