import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Query('itemIdentifier') itemIdentifier, @Query('postalCode') postalCode): Promise<string> {
    return await this.appService.getHello(itemIdentifier, postalCode);
  }
}
