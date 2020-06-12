
import { ApiProperty } from '@nestjs/swagger';

export class Link {

    @ApiProperty({
        description: '',
    })
    name:string;

    @ApiProperty({
        description: '',
    })
    url:string;

    @ApiProperty({
        description: '',
    })
    target:string;
}