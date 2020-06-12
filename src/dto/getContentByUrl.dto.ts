import { ApiProperty, ApiQuery } from '@nestjs/swagger';
import { Platform } from 'src/models/platform';

export class GetContentByUrlDto {
    @ApiProperty({
      description: ''
    })
  readonly url: string;
}
