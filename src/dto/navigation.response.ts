import { ApiProperty } from '@nestjs/swagger';
import { NavigationItem } from 'src/models/navigation.model';

export class NavigationResponse {
    @ApiProperty({
        description: ''
    })
    readonly navigation: NavigationItem[];

    @ApiProperty({
        description: ''
    })
    readonly metaNavigation: NavigationItem[];

    @ApiProperty({
        description: ''
    })
    readonly languageNavigation: NavigationItem[];


}