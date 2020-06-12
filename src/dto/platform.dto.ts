import { ApiProperty, ApiQuery } from '@nestjs/swagger';
import { Platform } from 'src/models/platform';

export class PlatformDto {
    @ApiProperty({
      description: '',
      enum:Platform
    })
  readonly platform: string;
}
