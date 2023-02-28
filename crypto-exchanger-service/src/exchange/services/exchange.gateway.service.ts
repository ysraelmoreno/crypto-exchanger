import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
import { IExchangeDTO } from '../interfaces/exchanges';
import { ExchangeService } from './exchange.service';

@WebSocketGateway(9229, {
  cors: {
    origin: ['http://localhost:5173'],
  },
})
export class ExchangeGatewayService implements OnModuleInit {
  @WebSocketServer()
  private server: Server;

  constructor(private readonly exchangeService: ExchangeService) {}

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('Socket connected');
    });
  }

  @SubscribeMessage('saveCurrenciesConversion')
  async handleExchanged(@MessageBody() data: string) {
    const exchangeDTO: IExchangeDTO = JSON.parse(data);

    const listOfData = await this.exchangeService.create(exchangeDTO);

    this.server.emit('listCurrencies', listOfData);
  }
}
