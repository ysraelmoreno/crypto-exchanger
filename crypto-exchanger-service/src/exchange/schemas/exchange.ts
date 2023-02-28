import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExchangeDocument = HydratedDocument<Exchange>;

@Schema()
export class Exchange {
  @Prop()
  dateTime: string;

  @Prop()
  currencyFrom: string;

  @Prop()
  firstAmount: number;

  @Prop()
  currencyTo: string;

  @Prop()
  secondAmount: number;

  @Prop()
  type: 'livePrice' | 'exchanged';
}

export const ExchangeSchema = SchemaFactory.createForClass(Exchange);
