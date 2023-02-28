import { Controller, Get } from '@nestjs/common';
import { ExchangeService } from '../services/exchange.service';

@Controller('exchange')
export class ExchangeControllers {
  constructor(private readonly exchangeService: ExchangeService) {}

  @Get()
  async listExchanges() {
    return this.exchangeService.list();
  }
}
