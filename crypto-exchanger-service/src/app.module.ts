import { Module } from '@nestjs/common';
import { CurrencyModule } from './currency/currency.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ExchangeModule } from './exchange/exchange.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL, {
      auth: {
        username: process.env.MONGO_USERNAME,
        password: process.env.MONGO_PASSWORD,
      },
    }),
    CurrencyModule,
    ExchangeModule,
  ],
})
export class AppModule {}
