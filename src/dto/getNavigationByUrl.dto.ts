import { ApiProperty, ApiQuery } from '@nestjs/swagger';

export class GetNavigationByUrlDto {
    @ApiProperty({
      description: '',
    })
  readonly url: string;
  @ApiProperty({
    description: '',
  })
  readonly levels: number;
}
