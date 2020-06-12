import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiNotFoundResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { ContentService } from '../providers/content.service';
import { GenericErrorResponse } from 'src/dto/generic-error.response';
import { ContentResponse } from 'src/dto/content.response';
import { Platform } from 'src/models/platform';
import { PlatformDto } from 'src/dto/platform.dto';
import { GetContentByUrlDto } from 'src/dto/getContentByUrl.dto';


@ApiTags('Page')
@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get(':platform/url')
  @ApiOkResponse({ type: ContentResponse, description: 'Your resource has been fetched successfully' })
  @ApiNotFoundResponse({ type: GenericErrorResponse, description: 'The resource you are looking for does not exist' })
  @ApiBadRequestResponse({ type: GenericErrorResponse, description: 'You did not supply the correct query parameters' })
  @ApiInternalServerErrorResponse({ type: GenericErrorResponse, description: 'The CMS requested did not send back a "Ok" or "Not Found"' })
  async url(@Param() params:PlatformDto, @Query() query:GetContentByUrlDto) {
    return this.contentService.getPage(params.platform as Platform, query.url);
  }
}
