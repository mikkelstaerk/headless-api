import { ApiProperty } from '@nestjs/swagger';

export class Featured {
    
    @ApiProperty({
        description: '',
    })
    description:string;


    @ApiProperty({
        description: '',
    })
    image:string;
}