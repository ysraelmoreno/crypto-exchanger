import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICurrencies, ICurrencyService } from '../interfaces/currency';
import { Currency, CurrencyDocument } from '../schemas/currency';

@Injectable()
export class CurrencyService implements ICurrencyService {
  constructor(
    @InjectModel(Currency.name)
    private readonly currencyModel: Model<CurrencyDocument>,
    private readonly httpService: HttpService,
  ) {}

  getDifferenceOfMinutes(dateToBeCompared: number) {
    const difference = Math.abs(new Date().getTime() - dateToBeCompared);

    const minutes = Math.floor(difference / 1000 / 60);

    return minutes;
  }

  public async getRates() {
    const getRates = await this.currencyModel.find({});

    let response: any = getRates[0];

    if (!response || response.length === 0) {
      const data = (
        await this.httpService.axiosRef.get(
          `http://api.coinlayer.com/live?access_key=decc34323f4a4352fb0116cb64668e7f`,
        )
      ).data.rates;

      response = await this.saveRates(data);
    }

    const minutes = this.getDifferenceOfMinutes(response.timestamp);

    if (minutes > Number(process.env.REFRESH_RATES)) {
      await this.deleteRates(getRates[0].id);

      const data = (
        await this.httpService.axiosRef.get(
          `http://api.coinlayer.com/live?access_key=decc34323f4a4352fb0116cb64668e7f`,
        )
      ).data.rates;

      response = await this.saveRates(data);
    }

    return response;
  }

  public async deleteRates(id: string) {
    await this.currencyModel.deleteOne({
      id,
    });
  }

  public async saveRates(rates: any[]) {
    const keys = Object.keys(rates);
    const object = [];

    for (const key of keys) {
      object.push({
        name: key,
        rate: rates[key],
      });
    }

    return await this.currencyModel.create({
      timestamp: new Date().getTime(),
      rates: object,
    });
  }

  private cryptoCurrencys = [
    {
      label: 'Bitcoin',
      value: 'BTC',
    },
    {
      label: 'Ethereum',
      value: 'ETH',
    },
  ];
  private currencys = ['USD'];

  public async getCurrency(): Promise<ICurrencies> {
    return {
      cryptos: this.cryptoCurrencys,
      currency: this.currencys,
    };
  }
}
