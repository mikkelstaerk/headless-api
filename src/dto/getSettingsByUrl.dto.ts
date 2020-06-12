import { ApiProperty, ApiQuery } from '@nestjs/swagger';

export class GetSettingsByUrlDto {
    @ApiProperty({
      description: ''
    })
  readonly url: string;
}
