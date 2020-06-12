import { Seo } from "./seo.model";
import { Featured } from "./featured.model";
import { ApiProperty } from '@nestjs/swagger';
import { Link } from "./link.model";

export class NavigationItem {

    @ApiProperty({
        description: '',
    })
    link:Link;

    @ApiProperty({
        description: '',
    })
    level:number;

    @ApiProperty({
        description: '',
    })
    children:NavigationItem;

    @ApiProperty({
        description: '',
    })
    hasChildren:boolean;
}