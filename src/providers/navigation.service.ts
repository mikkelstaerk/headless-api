import { Injectable, HttpStatus } from '@nestjs/common';
import { Platform } from 'src/models/platform';

@Injectable()
export class NavigationService {
  async getNavigation(platform:Platform, url:string, levels:number): Promise<any> {



    return {};
  }
}
