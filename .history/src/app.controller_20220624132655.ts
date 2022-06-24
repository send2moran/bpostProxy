import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Param('itemIdentifier') itemIdentifier, @Param('postalCode') postalCode): Promise<string> {
    return await this.appService.getHello(itemIdentifier, postalCode);
  }
}
