import { ApiProperty } from '@nestjs/swagger';
import { Tracking } from 'src/models/tracking.model';
import { SearchSettings } from 'src/models/search-settings.model';
import { SeoSite } from 'src/models/seo-site.model';
import { Footer } from 'src/models/footer.model';

export class SettingsResponse {
    @ApiProperty({
        description: ''
    })
    readonly seoSiteMetaData: SeoSite;

    @ApiProperty({
        description: ''
    })
    readonly searchSettings: SearchSettings;

    @ApiProperty({
        description: ''
    })
    readonly tracking: Tracking;

    @ApiProperty({
        description: ''
    })
    readonly footer: Footer;


}