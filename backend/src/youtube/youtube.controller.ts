import { Controller, Get, Query } from '@nestjs/common';
import { YoutubeService } from './youtube.service';

@Controller('youtube')
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Get('stats')
  async getVideoStats(@Query('videoId') videoId: string) {
    return this.youtubeService.getVideoStatistics(videoId);
  }
  
}
