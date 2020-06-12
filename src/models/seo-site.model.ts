
import { ApiProperty } from '@nestjs/swagger';

export class SeoSite {

    @ApiProperty({
        description: '',
    })
    siteName:string;
}