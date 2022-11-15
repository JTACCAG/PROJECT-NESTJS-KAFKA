import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Observable, toArray } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('ANTIFRAUD')
    private readonly clientKafka: ClientKafka,
  ) {}

  async publishMessage(max: string): Promise<Observable<number[]>> {
    console.log(max);
    this.clientKafka.subscribeToResponseOf('count');
    console.log(max);
    await this.clientKafka.connect();
    console.log(max);
    return this.clientKafka
      .send<number>('count', { max: Number(max) })
      .pipe(toArray());
  }
}
