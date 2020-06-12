import { Injectable, HttpStatus } from '@nestjs/common';
import { Platform } from 'src/models/platform';

@Injectable()
export class SettingsService {
  async getSettings(platform:Platform, url:string): Promise<any> {



    return {};
  }
}
