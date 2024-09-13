import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { YoutubeModule } from './youtube/youtube.module';
import { YoutubeModule } from './youtube/youtube.module';
import { YoutubeModule } from './youtube/youtube.module';
import { YoutubeModule } from './youtube/youtube.module';
import { YoutubeModule } from './youtube/youtube.module';

@Module({
  imports: [YoutubeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
