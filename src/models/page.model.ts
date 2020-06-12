import { Seo } from "./seo.model";
import { Featured } from "./featured.model";
import { ApiProperty } from '@nestjs/swagger';

export class Page {

    @ApiProperty({
        description: '',
    })
    seo:Seo;

    @ApiProperty({
        description: '',
    })
    featured:Featured;

    @ApiProperty({
        description: '',
    })
    content:any;
}