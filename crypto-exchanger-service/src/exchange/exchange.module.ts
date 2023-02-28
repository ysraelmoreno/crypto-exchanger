import { MongooseModule } from '@nestjs/mongoose';
import { Exchange, ExchangeSchema } from './schemas/exchange';
import { Module } from '@nestjs/common';
import { ExchangeGatewayService } from './services/exchange.gateway.service';
import { ExchangeService } from './services/exchange.service';
import { ExchangeControllers } from './controllers/exchange.controllers';

import { CurrencyModule } from 'src/currency/currency.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Exchange.name,
        schema: ExchangeSchema,
      },
    ]),
    CurrencyModule,
  ],
  controllers: [ExchangeControllers],
  providers: [ExchangeGatewayService, ExchangeService],
})
export class ExchangeModule {}
