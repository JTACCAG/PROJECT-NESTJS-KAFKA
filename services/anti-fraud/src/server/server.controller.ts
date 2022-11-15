import { Controller, Logger } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { from, Observable } from 'rxjs';

@Controller('server')
export class ServerController {
  @MessagePattern('count')
  count(message): Observable<number> {
    console.log(message.max);
    const numbers = [];
    for (let i = 1; i <= message.max; i++) {
      numbers.push(`i-${i}`);
    }
    console.log(numbers);
    return from(numbers);
  }
  @EventPattern('count.reply')
  logReply(message): void {
    Logger.log(message);
  }
}
