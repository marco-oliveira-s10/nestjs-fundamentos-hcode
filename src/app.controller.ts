import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

//No NestJS, Controllers são responsáveis por gerenciar as rotas e manipular as requisições HTTP recebidas pela aplicação.
@Controller()
export class AppController {

  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  setHello(): string {
    return "POST: Hello Hcode!";
  }

}
