import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CurrencyController } from './controllers/currency.controller';
import { Currency, CurrencySchema } from './schemas/currency';
import { CurrencyService } from './services/currency.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Currency.name,
        schema: CurrencySchema,
      },
    ]),
    HttpModule,
  ],
  exports: [CurrencyService],
  controllers: [CurrencyController],
  providers: [CurrencyService],
})
export class CurrencyModule {}
