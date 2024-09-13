import { Injectable } from '@nestjs/common';
import { configDotenv } from 'dotenv';
import { google } from 'googleapis';
configDotenv({ path: '.env.development' });

 
@Injectable()
export class YoutubeService {
    
      private youtube = google.youtube('v3');
      private apiKey = process.env.YOUTUBE_API_KEY;


    async getVideoStatistics(videoId: string) {
      const response = await this.youtube.videos.list({
        part: ['statistics', 'snippet', 'topicDetails', 'contentDetails', 'status'],
        id: [videoId],
        key: this.apiKey
      });
      return response.data.items;
    }


}
