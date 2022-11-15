import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionModule } from './modules/transaction/transaction.module';
import * as dotenv from 'dotenv';
import { ClientsModule } from '@nestjs/microservices';
import { microserviceConfig } from './config/microservice.config';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    TransactionModule,
    ClientsModule.register(microserviceConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
