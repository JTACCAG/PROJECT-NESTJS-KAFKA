import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/count/:max')
  async publishName(@Param('max') max: string): Promise<Observable<number[]>> {
    console.log(max);
    return await this.appService.publishMessage(max);
  }
}
