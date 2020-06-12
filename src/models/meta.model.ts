import { ApiProperty } from '@nestjs/swagger';

export class Meta {

    @ApiProperty({
        description: '',
    })    statusCode:number;

    @ApiProperty({
        description: '',
    })
    redirectUrl:string;

    @ApiProperty({
        description: '',
    })
    path:string;

    @ApiProperty({
        description: '',
    })
    template:string;

    @ApiProperty({
        description: '',
    })
    culture:string;
}