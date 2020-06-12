import { Injectable, HttpStatus } from '@nestjs/common';
import { Platform } from 'src/models/platform';

@Injectable()
export class ContentService {
  async getPage(platform:Platform, url:string): Promise<any> {
    return {
      page:{
        featured:{
          description:`My cool page from ${platform}`,
          image:'/image.jpg'
        }
      },
      meta:{
        culture:'en',
        path:'',
        redirectUrl:'',
        statusCode: Number(HttpStatus.OK),
        template:'content'
      }
    };
  }
}
