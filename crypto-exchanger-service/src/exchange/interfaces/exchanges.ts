export interface IExchangeDTO extends IBaseExchange {
  dateTime: Date;
  currencyFrom: string;
  currencyTo: string;
  firstAmout: number;
  secondAmount: number;
}

export interface IBaseExchange {
  type: 'exchanged' | 'live';
}
