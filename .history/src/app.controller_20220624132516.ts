import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    const itemIdentifier = 91316070;
    const postalCode = 6810733;
    return await this.appService.getHello(itemIdentifier, postalCode);
  }
}
