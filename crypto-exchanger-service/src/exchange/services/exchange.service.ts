import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IExchangeDTO } from '../interfaces/exchanges';
import { Exchange, ExchangeDocument } from '../schemas/exchange';
@Injectable()
export class ExchangeService {
  constructor(
    @InjectModel(Exchange.name)
    private readonly exchangeModel: Model<ExchangeDocument>,
  ) {}

  async list() {
    const allExchanges = await this.exchangeModel.find({});

    allExchanges.reverse();

    return allExchanges;
  }

  async create(data: IExchangeDTO) {
    const allDocuments = await this.list();
    const createdDocument = await this.exchangeModel.create(data);

    return [createdDocument, ...allDocuments];
  }
}
