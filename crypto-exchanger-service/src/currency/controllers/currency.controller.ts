import { Controller, Get } from '@nestjs/common';
import { CurrencyService } from '../services/currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}
  @Get()
  public listCurrencies() {
    return this.currencyService.getCurrency();
  }

  @Get('/rates')
  public async getListOfRates() {
    return this.currencyService.getRates();
  }
}
