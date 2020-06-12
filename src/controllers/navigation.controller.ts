import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiNotFoundResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { GenericErrorResponse } from 'src/dto/generic-error.response';
import { NavigationResponse } from 'src/dto/navigation.response';
import { NavigationService } from 'src/providers/navigation.service';
import { GetNavigationByUrlDto } from 'src/dto/getNavigationByUrl.dto';
import { Platform } from 'src/models/platform';
import { PlatformDto } from 'src/dto/platform.dto';


@ApiTags('Navigation')
@Controller('navigation')
export class NavigationController {
  constructor(private readonly navigationService:NavigationService) {}

  @Get(':platform')
  @ApiOkResponse({ type: NavigationResponse, description: 'Your resource has been fetched successfully' })
  @ApiNotFoundResponse({ type: GenericErrorResponse, description: 'The resource you are looking for does not exist' })
  @ApiBadRequestResponse({ type: GenericErrorResponse, description: 'You did not supply the correct query parameters' })
  @ApiInternalServerErrorResponse({ type: GenericErrorResponse, description: 'The CMS requested did not send back a "Ok" or "Not Found"' })
  async getNavigation(@Param() params:PlatformDto, @Query() query:GetNavigationByUrlDto) {
    return this.navigationService.getNavigation(params.platform as Platform, query.url, query.levels);
  }
}
