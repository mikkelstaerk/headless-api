import { ApiProperty } from '@nestjs/swagger';
import { Meta } from 'src/models/meta.model';
import { Page } from 'src/models/page.model';

export class ContentResponse {
    @ApiProperty({
        description: ''
    })
    readonly meta: Meta;

    @ApiProperty({
        description: '',
    })
    readonly page: Page;

}