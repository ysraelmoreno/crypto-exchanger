export interface ICurrency {
  label: string;
  value: string;
}

export interface ICurrencies {
  cryptos: ICurrency[];
  currency: string[];
}

export interface ICurrencyService {
  getCurrency: () => Promise<ICurrencies>;
}
