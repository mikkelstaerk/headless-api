
import { ApiProperty } from '@nestjs/swagger';

export class Tracking {

    @ApiProperty({
        description: '',
    })
    trackingId:string;
}