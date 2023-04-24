import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TRANSCODE_QUEUE } from './constants';
import { TranscodeConsumer } from './transcode.consumer';

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        redis: {
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
        },
      }),
      inject: [ConfigService],
    }),
    BullModule.registerQueue({ name: TRANSCODE_QUEUE }),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, TranscodeConsumer],
})
export class AppModule {}
