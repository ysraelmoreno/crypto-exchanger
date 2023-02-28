import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CurrencyDocument = HydratedDocument<Currency>;

@Schema()
class Rate {
  @Prop()
  name: string;

  @Prop()
  rate: number;
}

@Schema()
export class Currency {
  @Prop()
  timestamp: number;

  @Prop([Rate])
  rates: Rate[];
}

export const CurrencySchema = SchemaFactory.createForClass(Currency);
