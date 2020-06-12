import { Module } from '@nestjs/common';
import { ContentController } from './controllers/content.controller';
import { ContentService } from './providers/content.service';
import { NavigationController } from './controllers/navigation.controller';
import { NavigationService } from './providers/navigation.service';
import { SettingsService } from './providers/settings.service';
import { SettingsController } from './controllers/settings.controller';

@Module({
  imports: [],
  controllers: [ContentController, NavigationController, SettingsController],
  providers: [ContentService, NavigationService, SettingsService],
})
export class AppModule {}
