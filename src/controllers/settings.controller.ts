import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiNotFoundResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { GenericErrorResponse } from 'src/dto/generic-error.response';
import { Platform } from 'src/models/platform';
import { PlatformDto } from 'src/dto/platform.dto';
import { SettingsResponse } from 'src/dto/settings.response';
import { SettingsService } from 'src/providers/settings.service';
import { GetSettingsByUrlDto } from 'src/dto/getSettingsByUrl.dto';


@ApiTags('Settings')
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService:SettingsService) {}

  @Get(':platform')
  @ApiOkResponse({ type: SettingsResponse, description: 'Your resource has been fetched successfully' })
  @ApiNotFoundResponse({ type: GenericErrorResponse, description: 'The resource you are looking for does not exist' })
  @ApiBadRequestResponse({ type: GenericErrorResponse, description: 'You did not supply the correct query parameters' })
  @ApiInternalServerErrorResponse({ type: GenericErrorResponse, description: 'The CMS requested did not send back a "Ok" or "Not Found"' })
  async getSettings(@Param() params:PlatformDto, @Query() query:GetSettingsByUrlDto) {
    return await this.settingsService.getSettings(params.platform as Platform, query.url);
  }
}
