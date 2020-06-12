
import { ApiProperty } from '@nestjs/swagger';

export class Footer {

    @ApiProperty({
        description: '',
    })
    footerContent:string;
}