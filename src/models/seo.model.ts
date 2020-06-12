import { ApiProperty } from '@nestjs/swagger';

export class Seo {

    @ApiProperty({
        description: '',
    })
   title:string;

   @ApiProperty({
    description: '',
})
   description:string;

   @ApiProperty({
    description: '',
})
   robotsIndex:boolean;

   @ApiProperty({
    description: '',
})
   robotsFollow:boolean;
}