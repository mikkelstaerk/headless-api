
import { ApiProperty } from '@nestjs/swagger';

export class SearchSettings {

    @ApiProperty({
        description: '',
    })
    searchResultPageUrl:string;
}